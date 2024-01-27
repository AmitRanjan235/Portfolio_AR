import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Brandmeasure from "../../Assets/Projects/Brandmeasure.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={Brandmeasure}
    isBlog={false}
    title="Brand Measure Project"
    description={
      <ul>
        <li>Developed a brand measure project using cutting-edge technologies such as PySpeech, audio chunking, Symspell, and a superfast keyword search approach to analyze large volumes of audio data.</li>
        <li>Utilized PySpeech to convert audio data to text and applied audio chunking to segment the text data for more efficient processing.</li>
        <li>Implemented Symspell for spell correction to improve the accuracy of the text data and optimized keyword search using a superfast approach to quickly identify relevant brand-related terms.</li>
        <li>Successfully measured brand sentiment and identified key trends in customer feedback, providing valuable insights to inform business decisions.</li>
      </ul>
    }
    link="https://github.com/AmitRanjan235/Brand_Measures_project"
  />
</Col>
        <Col md={4} className="project-card">
        <ProjectCard
          imgPath={chatify}
          isBlog={false}
          title="Dogs breed classification"
          description={
            <ul>
              <li>Implemented a dog breed classification model using pre-trained convolutional neural networks (CNN) in Python.</li>
              <li>Used three different architectures - AlexNet, VGG, and ResNet - to compare and find the best possible CNN architecture for the given dataset.</li>
              <li>Achieved 100% accuracy in classifying whether the animal is a dog or not using all three architectures.</li>
              <li>Obtained a 93.3% accuracy in correctly classifying the breed of dogs using the VGG architecture.</li>
              <li>Calculated and checked the statistics using the calculates_results_stats() function to ensure the accuracy of the model.</li>
              <li>Identified and reported the incorrect dog breed assignments made by the model for further improvement.</li>
            </ul>
          }
          link="https://github.com/AmitRanjan235/Dog_breed_classification"
        />
      </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flower Species Image Classifier Project"
              description={<ul>
                <li>Developed an image classifier for flower species with 102 different categories as a part of Udacity AI Programming with Python Nanodegree Program.</li>
                <li>Utilized PyTorch to train the deep learning model on a dataset of flower images, implementing data augmentation, normalization, and batching.</li>
                <li>Loaded and froze a pre-trained VGG16 network from torchvision.models, and defined a feedforward classifier as its input to train on the flower image dataset.</li>
                <li>Trained the feedforward classifier with appropriate hyperparameters, and displayed validation loss and accuracy during training, with testing accuracy measured on the test data.</li>
                <li>Saved the trained model as a checkpoint with associated hyperparameters and class_to_idx dictionary, with a function to load the checkpoint and rebuild the model.</li>
                <li>Implemented a command-line interface to allow users to train the model with different architectures and hyperparameters, and predict flower species with associated probabilities and class names using the trained model.</li>
                </ul>}
              link="https://github.com/AmitRanjan235/ImageClassifier_Udacity_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="wafer fault detection"
              description='build a classification methodology to predict the quality of wafer sensors based on the given training data.The client will send data in multiple sets of files in batches at a given location. Data will contain Wafer names and 590 columns of different sensor values for each wafer. The last column will have the "Good/Bad" value for each wafer.

              "Good/Bad" column will have two unique values +1 and -1.
              
              "+1" represents Bad wafer.
              
              "-1" represents Good Wafer.
              
              Apart from training files, we also require a "schema" file from the client, which contains all the relevant information about the training files such as:'
              link="https://github.com/AmitRanjan235/Wafer_fault_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="tourism in india"
              description="We are the group of developers that provide the solution of ease of accessing of tourist places.The home page shows the beautiful interface of top visiting of India with region and a beautiful video which shows the amazing beauty of India.
              
              It also contain the Hotel section which help tourist to find a room at very low price with best features.It provide the user login and register page through which they can easily book a hotel room with required facilities.
              "
              link="https://github.com/AmitRanjan235/Tourism-in-india"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Warehouse Apparel Detection Web App using YOLOv5"
              description={<ul>
                <li>Developed a web application for apparel detection using YOLOv5 object detection model.</li>
                <li>Utilized Python and PyTorch to implement the YOLOv5 model and Flask to build the web application and serve the model predictions.</li>
                <li>Implemented functionality to upload images, detect apparel, and display the results with bounding boxes and class labels.</li>
                <li>Customized the web application by modifying Flask application code, detector code, and HTML interface code.</li>
                <li>Built with Python, PyTorch, Flask, and YOLOv5 object detection model.</li>
                <li>Licensed under the MIT License.</li>
                </ul>}
              link="https://github.com/AmitRanjan235/Yolov5_Warehouse_apparel_detection_webApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/AmitRanjan235/emotion_detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
