import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NoPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#F76902] to-[#1a1a1a] flex flex-col overflow-hidden particles-container">

      <div className="flex-grow flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-lg w-full bg-[#11111] border border-gray-700 p-8 backdrop-blur-sm bg-opacity-70">
            <CardHeader className="text-center space-y-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <CardTitle className="text-6xl font-extrabold text-white tracking-tighter">
                  404
                </CardTitle>
              </motion.div>
              <CardDescription className="text-cyan-800 text-xl font-medium">
                Page Not Found
              </CardDescription>
            </CardHeader>
            
            <CardContent className="mt-6 text-center text-white font-bold leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                You've wandered too far from the race track.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-sm text-white font-bold"
              >
                (Error code: 404 - Resource not found)
              </motion.p>
            </CardContent>
            
            <CardFooter className="mt-8 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border-2 border-cyan-800 text-cyan-800 rounded-lg font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 group"
                >
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mr-2 group-hover:mr-3 transition-all"
                  >
                    ←
                  </motion.span>
                  Return to the track
                </Link>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
      
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
            100% {
              transform: translateY(0) translateX(20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default NoPage;