import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import card components for layout
import { Link } from 'react-router-dom'; // Import Link for navigation
import { motion } from 'framer-motion'; // Import motion for simple animations

const NoPage: React.FC = () => {
  return (

        // Full-screen container with a gradient background
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#F76902] to-[#1a1a1a] flex flex-col overflow-hidden particles-container">

              {/* Centering wrapper for the card */}
      <div className="flex-grow flex items-center justify-center px-4">
        {/* Fade-in animation for the whole card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Semi-transparent black card */}
          <Card className="max-w-lg w-full border border-gray-700 p-8 backdrop-blur-sm bg-[#000000]/50 ">
            <CardHeader className="text-center space-y-3">
              {/* Small animation around the 404 text */}
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

                 {/* 404 text */}
                <CardTitle className="text-6xl font-extrabold text-white tracking-tighter">
                  404
                </CardTitle>
              </motion.div>

              {/* Page not found text */}
              <CardDescription className="text-white text-xl font-medium">
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
            
              {/* Footer with a return link */}
             <CardFooter className="mt-8 flex justify-center">
              {/* Hover and tap animation for the button */}              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/home" // Link back to home
                  className="inline-flex items-center px-6 py-3 border-2 border-cyan-800 text-white rounded-lg font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 group"
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
      
     {/* CSS keyframes needed for floating animations */}
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