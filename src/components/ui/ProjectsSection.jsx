"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projects } from "@/data/resume"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <Select onValueChange={(value) => setSelectedProject(projects.find(p => p.name === value))} defaultValue={projects[0].name}>
        <SelectTrigger className="w-full mb-4">
          <SelectValue placeholder="Select a project" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((project) => (
            <SelectItem key={project.name} value={project.name}>
              {project.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedProject && (
        <Card>
          <CardContent className="p-4 md:p-6">
            <Carousel className="w-full max-w-md mx-auto mb-6">
              <CarouselContent>
                {selectedProject.images && selectedProject.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image 
                        src={image} 
                        alt={`Project image ${index + 1}`} 
                        width={1200} 
                        height={800} 
                        className="rounded-md object-cover w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <h3 className="text-2xl font-semibold mb-2">{selectedProject.name}</h3>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            
            {selectedProject.technologies && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button asChild>
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

