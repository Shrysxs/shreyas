"use client";

import { RepeatIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";

const layers = ["hello", "mark"] as const;

export function Hello() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const canRestart = currentIndex === layers.length - 1;

  useEffect(() => {
    const realUser = isRealUser();
    if (realUser) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500);
    }
  }, []);

  const nextAnimation = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % layers.length);
    }, 500);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <div
          key={`layer-${currentIndex}`}
          className="flex items-center justify-center text-black dark:text-white"
        >
          {layers[currentIndex] === "hello" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={nextAnimation}
            >
              <span className="font-mono text-4xl font-bold sm:text-6xl">
                Hello.
              </span>
            </motion.div>
          )}

          {layers[currentIndex] === "mark" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-4xl font-bold sm:text-6xl">
                Shreyas.
              </span>
            </motion.div>
          )}
        </div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end justify-end">
        <SimpleTooltip content="Restart animation">
          <Button
            className="translate-px"
            variant="outline"
            size="icon"
            disabled={!canRestart}
            onClick={() => {
              setCurrentIndex(0);
            }}
          >
            <RepeatIcon />
            <span className="sr-only">Restart animation</span>
          </Button>
        </SimpleTooltip>
      </div>
    </>
  );
}

function isRealUser() {
  if (navigator.webdriver) {
    return false;
  }

  if (!navigator.languages || navigator.languages.length === 0) {
    return false;
  }

  if (/HeadlessChrome|Puppeteer|Playwright/i.test(navigator.userAgent)) {
    return false;
  }

  return true;
}
