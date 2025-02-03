"use client";
import { useEffect, useRef } from "react";
import * as Matter from "matter-js";

// Import SVGs as static image URLs (stored in the public folder)
const shape1 = "/landing_page/arrow.svg";

// Set desired width & height for all images
const IMAGE_WIDTH = 180; // Adjust as needed
const IMAGE_HEIGHT = 180; // Adjust as needed

export default function PhysicsSimulation() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Create engine and world
    const engine = Matter.Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 1; // Enable gravity

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "#f0f0f0",
      },
    });

    // Create ground
    const ground = Matter.Bodies.rectangle(400, 580, 810, 20, { isStatic: true });

    // Function to preload an image
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      });
    };

    // Function to add an image-based physics body
    const loadSVG = async (imageSrc: string, x: number, y: number) => {
      try {
        const img = await loadImage(imageSrc);

        // Calculate scale factors based on the original image size
        const scaleX = IMAGE_WIDTH / img.width;
        const scaleY = IMAGE_HEIGHT / img.height;

        // Create a rectangle body with the desired size
        const body = Matter.Bodies.circle(x, y, IMAGE_WIDTH/1.5, {
          restitution: 0.6, // Bounciness
          friction: 0.1,
          density: 0.02,
          render: {
            sprite: {
              texture: imageSrc,
              xScale: scaleX,
              yScale: scaleY,
            },
          },
        });

        Matter.World.add(world, body);
      } catch (error) {
        console.error(error);
      }
    };

    // Load images and start simulation only after all images are added
    const loadAllImages = async () => {
      const positions = Array.from({ length: 10 }).map(() => ({
        x: Math.random() * 600 + 100,
        y: Math.random() * 100,
      }));

      await Promise.all(positions.map((pos) => loadSVG(shape1, pos.x, pos.y)));

      // Start physics simulation only after adding objects
      Matter.World.add(world, [ground]);
      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine); // Better physics update loop
      Matter.Render.run(render);
    };

    loadAllImages();

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  return <div ref={sceneRef} className="relative w-[800px] h-[600px] bg-gray-200"></div>;
}
