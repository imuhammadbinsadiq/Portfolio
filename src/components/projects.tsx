import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, ArrowRight } from 'lucide-react';

const projectsData = [
    {
      title: 'Real-Time Emotion Recognition',
      description: 'A Convolutional Neural Network (CNN) built with OpenCV to detect and classify human emotions in real-time video streams.',
      githubLink: 'https://github.com/imuhammadbinsadiq/Deep-Learning-Models-Applications/blob/main/Convolutional%20Neural%20Network/real_time_emotion_recognition.ipynb',
    },
    {
      title: "LSTM-Based Sentiment Analysis",
      description: 'Utilized a Recurrent Neural Network (RNN) with LSTM cells to perform sentiment analysis on McDonald\'s customer reviews.',
      githubLink: 'https://github.com/imuhammadbinsadiq/Deep-Learning-Models-Applications/blob/main/Recurrent%20Neural%20Network/rnn_sentiment_analysis.ipynb',
    },
    {
      title: 'Real-Time Object Detection (YOLOv4)',
      description: 'Implemented YOLOv4 with OpenCV for high-performance, real-time detection of multiple objects via webcam feed.',
      githubLink: 'https://github.com/imuhammadbinsadiq/Deep-Learning-Models-Applications/blob/main/Convolutional%20Neural%20Network/cnn_real_time_object_detection.ipynb',
    },
    {
      title: 'Image Classification with CNN (CIFAR-10)',
      description: 'Developed a CNN to classify images from the challenging CIFAR-10 dataset, demonstrating the power of deep learning in vision tasks.',
      githubLink: 'https://github.com/imuhammadbinsadiq/Deep-Learning-Models-Applications/blob/main/Convolutional%20Neural%20Network/cnn_image_classification.ipynb',
    },
    {
      title: 'Fashion MNIST Classification with CNN',
      description: 'Built a deep learning model for accurate recognition and classification of various clothing items from the Fashion MNIST dataset.',
      githubLink: 'https://github.com/imuhammadbinsadiq/Deep-Learning-Models-Applications/blob/main/Convolutional%20Neural%20Network/cnn_fashion_mnist_classification.ipynb',
    },
  ];

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="group flex transform flex-col overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/20"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="h-[4.5rem] overflow-hidden text-ellipsis">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter>
                <Button variant="outline" asChild className="w-full hover:bg-primary/90 hover:text-primary-foreground">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
