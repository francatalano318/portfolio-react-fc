import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DiplomModal({ isOpen, diploma, onClose }) {
  if (!diploma) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="diplom-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="diplom-modal-content"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="diplom-modal-close"
              onClick={onClose}
              aria-label="Cerrar modal"
            >
              ×
            </button>

            <div className="diplom-modal-image-container">
              <img
                src={diploma.src}
                alt={diploma.title}
                className="diplom-modal-image"
              />
            </div>

            <div className="diplom-modal-info">
              <h3>{diploma.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
