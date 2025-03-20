"use client";
import { useEffect, useRef, useMemo } from "react";
import * as Matter from "matter-js";
import styles from './content.module.css';

const shapes = [
  "/landing_page/svgs/S.svg",
  "/landing_page/svgs/I.svg",
  "/landing_page/svgs/D.svg",
  "/landing_page/svgs/S.svg",
  "/landing_page/svgs/I.svg",
  "/landing_page/svgs/D.svg",
  "/landing_page/svgs/S.svg",
  "/landing_page/svgs/I.svg",
  "/landing_page/svgs/D.svg",
];

const IMAGE_WIDTH = 180;

export default function RightComponent() {
  const sceneRef = useRef<HTMLDivElement>(null);

  // Memoize the canvasSize object to ensure it doesn't change on every render
  const canvasSize = useMemo(() => ({ width: 900, height: 600 }), []);

  useEffect(() => {
    if (typeof window === "undefined" || !sceneRef.current) return;

    const { width, height } = canvasSize;

    // Create Matter.js engine & world
    const engine = Matter.Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 1;

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "#0736FE",
      },
    });

    // Responsive helper functions
    const percentX = (percent: number) => Math.round((percent / 100) * width);
    const percentY = (percent: number) => Math.round((percent / 100) * height);

    // Create walls & ground
    const ground = Matter.Bodies.rectangle(percentX(50), height + 10, width, 20, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(-10, percentY(50), 20, height, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(width + 10, percentY(50), 20, height, { isStatic: true });

    ground.render.visible = false;
    leftWall.render.visible = false;
    rightWall.render.visible = false;

    // Function to preload all images once
    const preloadImages = async (): Promise<HTMLImageElement[]> => {
      return Promise.all(
        shapes.map(
          (src) =>
            new Promise<HTMLImageElement>((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve(img);
              img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            })
        )
      );
    };

    // Function to add an image-based physics body
    const createImageBody = (img: HTMLImageElement, x: number, y: number) => {
      const body = Matter.Bodies.circle(x, y, IMAGE_WIDTH / 2.5, {
        restitution: 0.6,
        friction: 0.1,
        density: 0.02,
        render: {
          sprite: {
            texture: img.src,
            xScale: 2.0,
            yScale: 2.0,
          },
        },
      });

      Matter.World.add(world, body);
    };

    // Load images and start simulation
    const startSimulation = async () => {
      try {
        const images = await preloadImages();
        const positions = Array.from({ length: shapes.length }).map(() => ({
          x: Math.random() * (width - 200) + 100,
          y: Math.random() * 100,
        }));

        positions.forEach((pos, i) => createImageBody(images[i % images.length], pos.x, pos.y));

        Matter.World.add(world, [ground, leftWall, rightWall]);
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);
        Matter.Render.run(render);
      } catch (error) {
        console.error(error);
      }
    };

    // Add mouse interaction
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse; // Associate mouse with the render

    startSimulation();

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, [canvasSize]);

  return <div ref={sceneRef} className={styles.content}></div>;
}
