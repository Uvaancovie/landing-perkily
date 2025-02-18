"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { UserGroupIcon, ChartPieIcon } from "@heroicons/react/24/outline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Lottie from "lottie-react"
import missionAnimation from "../app/assets/lottie/mission.json"

const About = () => {
  const teamMembers = [
    {
      name: "Mpumelelo Tembe",
      role: "Chief Executive Officer",
      image: "/director-2.jpg",
      bio: "Passionate leader with over 20 years of experience in healthcare management and innovation.",
    },
    {
      name: "Thuthukile Moloto",
      role: "Executive Director",
      image: "/director-1.jpg",
      bio: "Expert in healthcare operations and patient engagement strategies.",
    },
  ]

  const stats = [
    { id: 1, name: "Healthcare partners", value: "250+", icon: UserGroupIcon },
    { id: 2, name: "Active users", value: "1M+", icon: UserGroupIcon },
    { id: 3, name: "Patient retention rate", value: "89%", icon: ChartPieIcon },
  ]

  return (
    <div className="bg-white relative z-10">
      {/* About Header Section */}
      <div className="relative bg-gradient-to-b from-indigo-900 to-blue-900 pt-24 pb-32 z-0">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Perkily</h2>
            <p className="text-xl text-indigo-200">
              Revolutionizing healthcare loyalty through technology and innovation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-6 py-20">
        <Tabs defaultValue="team" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="values">Our Values</TabsTrigger>
          </TabsList>

          {/* Team Tab */}
          <TabsContent value="team">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-square relative bg-gray-100">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-indigo-600 mt-2">{member.role}</p>
                        <p className="text-gray-600 mt-4">{member.bio}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Mission Tab */}
          <TabsContent value="mission">
            <Card>
              <CardContent className="p-8">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-indigo-600 mb-4">
                    <Lottie animationData={missionAnimation} loop={true} className="w-48 h-48 mx-auto" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To empower healthcare providers with intelligent loyalty solutions that enhance patient
                    relationships, improve health outcomes, and drive sustainable practice growth through innovative
                    technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Values Tab */}
          <TabsContent value="values">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Innovation",
                      description:
                        "Continuously evolving our solutions to meet the changing needs of healthcare providers and their patients.",
                    },
                    {
                      title: "Excellence",
                      description:
                        "Committed to delivering the highest quality solutions and service to our healthcare partners.",
                    },
                    {
                      title: "Patient-Centric",
                      description:
                        "Focusing on improving patient experiences and outcomes through our loyalty programs.",
                    },
                    {
                      title: "Integrity",
                      description:
                        "Maintaining the highest standards of ethics and privacy in healthcare data management.",
                    },
                  ].map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default About

