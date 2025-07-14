import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1e1e1e] to-[#F76902]/80 flex flex-col overflow-hidden">
      {" "}
      {/* Centering wrapper for the card */}
      <div className="flex-grow flex items-center justify-center px-4">
        {/* Fade-in animation for the whole card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Semi-transparent black card */}
          <Card className="max-w-lg w-full border border-gray-700 p-8 backdrop-blur-sm bg-[#000000]/50">
            <CardHeader className="text-center space-y-3">
              {/* Pulsing animation for the 504 text */}
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [1, 0.9, 1],
                  color: ["#ffffff", "#F76902", "#ffffff"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <CardTitle className="text-6xl font-extrabold tracking-tighter">
                  504
                </CardTitle>
              </motion.div>

              {/* Gateway timeout text */}
              <CardDescription className="text-white text-xl font-medium">
                Gateway Timeout
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-6 text-center text-white font-bold leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                The server took too long to respond - pit stop needed!
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-sm text-white font-bold"
              >
                (Error code: 504 - Server timeout)
              </motion.p>

              {/* Animated loading indicator */}
              <motion.div
                className="flex justify-center mt-6"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-[#F76902] rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </CardContent>

            {/* Footer with a return link */}
            <CardFooter className="mt-8 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border-2 border-cyan-800 text-white rounded-lg font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 group"
                >
                  <span className="mr-2 group-hover:rotate-[360deg] group-hover:mr-3 transition-all duration-800 ease-linear inline-block">
                    ↻
                  </span>
                  <span className="group-hover:mr-3 transition-all">
                    Try again
                  </span>
                </Link>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
      {/* Optional: Add some animated elements in the background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#F76902] rounded-full"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#F76902] rounded-full"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </div>
  );
};

export default ErrorPage;
