import { motion } from "framer-motion";

function TitreEpreuve({ children }) {
    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.7,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };
    return (
        <motion.h1
            className="text-center text-2xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            {children}
        </motion.h1>
    );
}

export default TitreEpreuve;
