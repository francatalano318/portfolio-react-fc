import React, { useState } from 'react'
import { motion } from 'framer-motion'
import reactCert from '../assets/REACT.JPG'
import angularCert from '../assets/ANGULAR.JPG'
import nodeCert from '../assets/NODE.JPG'
import DiplomModal from './DiplomModal'

const diplomas = [
  { id: 'react', title: 'React JS', src: reactCert },
  { id: 'angular', title: 'Angular', src: angularCert },
  { id: 'node', title: 'NodeJS', src: nodeCert }
]

export default function Diplomas() {
  const [selectedDiplom, setSelectedDiplom] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (diplom) => {
    setSelectedDiplom(diplom)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedDiplom(null), 300) // Clear after animation
  }

  return (
    <motion.section
      className="diplomas"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="diplomas-title">Certificados</h3>

      <div className="diplomas-grid">
        {diplomas.map(d => (
          <article
            className="diploma-card"
            key={d.id}
            onClick={() => handleOpenModal(d)}
          >
            <div className="diploma-image-wrap">
              <img src={d.src} alt={`${d.title} certificado`} />
              <div className="diploma-placeholder">{d.title}</div>
            </div>
            <p className="diploma-caption">{d.title}</p>
          </article>
        ))}
      </div>

      <DiplomModal
        isOpen={isModalOpen}
        diploma={selectedDiplom}
        onClose={handleCloseModal}
      />
    </motion.section>
  )
}
