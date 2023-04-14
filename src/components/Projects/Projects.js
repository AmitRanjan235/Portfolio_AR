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
              imgPath={chatify}
              isBlog={false}
              title="Dogs breed classification"
              description="dog breed classification using pretrained convolutional neural network (often abbreviated as CNN) using three different architectures AlexNet, VGG, and ResNet and comparing them to get best possible CNN architecture.In this project all architecture 100% correctly classifies the animal is dog or not and other accuracy are following:* Statistics from calculates_results_stats() function: N Images: 40 N Dog Images: 30 N NotDog Images: 10 Pct Corr dog: 100.0 Pct Corr NOTdog: 100.0 Pct Corr Breed: 93.3

              ** Check Statistics - calculated from this function as a check: N Images: 40 N Dog Images: 30 N NotDog Images: 10 Pct Corr dog: 100.0 Pct Corr NOTdog: 100.0 Pct Corr Breed: 93.3
              
              *** Results Summary for CNN Model Architecture VGG *** N Images : 40 N Dog Images : 30 N Not-Dog Images: 10
              
              pct_match: 87.5 pct_correct_dogs: 100.0 pct_correct_breed: 93.33333333333333 pct_correct_notdogs: 100.0
              
              INCORRECT Dog Breed Assignment: Real: great_pyrenees Classifier: kuvasz Real: beagle Classifier: walker_hound,_walker_foxhound
              
              ** Total Elapsed Runtime: 0:0:32"
              link="https://github.com/AmitRanjan235/Dog_breed_classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ImageClassifier for Flower"
              description="Developing an command line AI application and notebook to train an image classifier to recognize different species of flowers and got accuracy approx 91%"
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
              description="This web application uses the YOLOv5 deep learning model to detect apparel from an image uploaded by the user. The detected objects are then highlighted with bounding boxes and labeled with the predicted class."
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
