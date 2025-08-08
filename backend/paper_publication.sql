-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2025 at 02:51 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paper_publication`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'admin', '1234'),
(17, 'asdasasqw', 'asdaf');

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `volume` int(11) NOT NULL,
  `issue_number` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `publication_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `year` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `issues`
--

INSERT INTO `issues` (`id`, `volume`, `issue_number`, `title`, `publication_date`, `created_at`, `year`) VALUES
(14, 2, 1, 'IJETT | Volume 2 | Issue 1 | April 2015', '2025-08-08', '2025-08-01 09:57:44', '2015'),
(15, 3, 3, 'IJETT | Volume 3 | Issue 3 | September 2016', '2025-08-02', '2025-08-01 09:58:16', '2016'),
(17, 3, 1, 'IJETT | Volume 3 | Issue 1 | April 2016.', '2025-08-01', '2025-08-01 09:59:05', '2016'),
(18, 4, 3, 'IJETT | Volume 4 | Issue 3 | September 2017', '2025-08-01', '2025-08-01 09:59:34', '2017'),
(19, 10, 3, 'IJETT | Volume 10 | Issue 3 | ICDIDSA 2023 Proceeding', '2025-08-01', '2025-08-01 10:00:31', '2023'),
(20, 10, 2, 'IJETT | Volume 10 | Issue 2 | September 2023', '2025-08-08', '2025-08-01 10:00:59', '2023'),
(21, 9, 2, 'IJETT | Volume 9 | Issue 2 | September 2022', '2025-08-07', '2025-08-01 10:12:12', '2022'),
(22, 7, 1, 'IJETT | Volume 7 | Issue 1 | April 2020', '2025-08-02', '2025-08-01 10:12:34', '2020'),
(28, 5, 1, 'IJETT | Volume 5 | Issue 1 | April 2018', '2025-08-05', '2025-08-04 12:17:31', '2018'),
(29, 3, 2, 'IJETT | Volume 3 | Issue 2 | July 2016 | ICSTSD 2016 Proceeding', '2025-08-23', '2025-08-04 12:48:32', '2016'),
(37, 2, 3, '2435', '2025-08-08', '2025-08-07 11:47:04', '2024');

-- --------------------------------------------------------

--
-- Table structure for table `papers`
--

CREATE TABLE `papers` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `abstract` text DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  `status` enum('submitted','under_review','accepted','rejected') DEFAULT 'submitted',
  `submission_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `issue_id` int(11) DEFAULT NULL,
  `uploaded_at` datetime DEFAULT current_timestamp(),
  `editor_name` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `papers`
--

INSERT INTO `papers` (`id`, `title`, `abstract`, `file_path`, `author_id`, `status`, `submission_date`, `issue_id`, `uploaded_at`, `editor_name`) VALUES
(13, 'A Comprehensive Review of various Deep Learning Techniques for SARS-COVID-19 Detection', 'The COVID-19 pandemic continues to set alarming records in terms of both cumulative and daily infection numbers on a global scale. This unprecedented healthcare crisis necessitates accurate and swift methods for detecting COVID-19 cases through the analysis of patient data. Deep learning (DL) methods have demonstrated their utility in rapidly and effectively identifying and outlining infectious areas within radiological images. The research aims to provide a comprehensive overview of innovative deep learning-based applications in the context of medical imaging modalities, specifically computer tomography (CT), for the detection and classification of COVID-19. Initially, we will establish a taxonomy of medical imaging and offer a concise overview of various types of deep learning (DL) methodologies. Subsequently, we will utilize deep learning techniques to provide an overview of systems developed for the purpose of detecting and classifying COVID-19. Additionally, we will provide an overview of the most commonly employed databases for training these networks. Lastly, we will delve into the challenges associated with the implementation of deep learning algorithms in COVID-19 detection and explore potential avenues for future research in this field.', '68907d7ecffe2_A Comprehensive Review of various Deep Learning Techniques for SARS-COVID-19 Detection.pdf', 1, 'submitted', '2025-08-04 09:29:34', 19, '2025-08-04 14:59:34', 'Namrata Nikam, Sanjay Ganorkar'),
(15, 'Performance Analysis of Speed Control of Induction Motor Using Improved Hybrid PI – Vector Control', 'he induction motor is very popular right now, especially for industrial and household applications. It is amazing and commendable how far variable speed drive technology has come. Due to their durability and low maintenance requirements, induction motors are being used more and more in a variety of industries where the majority of applications require quick response times and sophisticated speed control. The primary challenge to achieving the highest efficiency and maximum torque is speed control. This research introduces the formulation of the speed control as well as the speed control approaches. In this research, a hybrid speed-control system for a three-phase squirrel cage induction motor (SCIM) is presented. The proposed approach applies vector control and combines FOC with conventional controllers. The three-phase induction motor\'s speed response is enhanced using this technique, which combines the benefits of conventional controllers with FOC. Proportional integral - field oriented control (PI- FOC) simulation results and implementation are used to evaluate the performance of the hybrid system controller. At different load scenarios, performance measures such as rise time (tr), maximum percent overshoot, and settling time (ts) are recorded. By using MATLAB/ Simulink, the results demonstrated improved speed tracking performance and system stability, and they demonstrated the effectiveness of the proposed hybrid speed controller under a range of operating conditions', '689081dd9b618_Performance Analysis of Speed Control of Induction Motor Using Improved Hybrid PI – Vector Control.pdf', 1, 'submitted', '2025-08-04 09:48:13', 19, '2025-08-04 15:18:13', 'Arpit Yadav, Ranjay Das'),
(17, 'Performance Analysis of Speed Control of Induction Motor Using Improved Hybrid PI – Vector Control', 'The induction motor is very popular right now, especially for industrial and household applications. It is amazing and commendable how far variable speed drive technology has come. Due to their durability and low maintenance requirements, induction motors are being used more and more in a variety of industries where the majority of applications require quick response times and sophisticated speed control. The primary challenge to achieving the highest efficiency and maximum torque is speed control. This research introduces the formulation of the speed control as well as the speed control approaches. In this research, a hybrid speed-control system for a three-phase squirrel cage induction motor (SCIM) is presented. The proposed approach applies vector control and combines FOC with conventional controllers. The three-phase induction motor\'s speed response is enhanced using this technique, which combines the benefits of conventional controllers with FOC. Proportional integral - field oriented control (PI- FOC) simulation results and implementation are used to evaluate the performance of the hybrid system controller. At different load scenarios, performance measures such as rise time (tr), maximum percent overshoot, and settling time (ts) are recorded. By using MATLAB/ Simulink, the results demonstrated improved speed tracking performance and system stability, and they demonstrated the effectiveness of the proposed hybrid speed controller under a range of operating conditions', '6890a1bfb6a4f_Performance Analysis of Speed Control of Induction Motor Using Improved Hybrid PI – Vector Control.pdf', 1, 'submitted', '2025-08-04 12:04:15', 19, '2025-08-04 17:34:15', 'Arpit Yadav, Ranjay Das'),
(18, 'Enhancing Government Procurement: Utilizing Business Intelligence for Deep Data Analytics in Electronic Procurement', 'Government procurement processes can be made more effective, transparent, and accountable by using electronic procurement systems, which have attracted a lot of attention in the public sector. To comprehend and evaluate the usage and effects of the government\'s electronic procurement system, this research article conducts an analytical analysis. The paper evaluates the primary characteristics, advantages, difficulties, and success factors related to the deployment of electronic procurement systems, drawing knowledge from prior research and actual case studies. The paper also suggests a framework for evaluating the effectiveness of electronic procurement systems based on several criteria, including process effectiveness, cost-effectiveness, vendor engagement, and governance. The study\'s findings aid in understanding the function and potential of the Electronic Procurement System in modernizing government procurement.\r\n', '6890a445b0161_Enhancing Government Procurement Utilizing Business Intelligence for Deep Data Analytics in Electronic Procurement.pdf', 1, 'submitted', '2025-08-04 12:15:01', 19, '2025-08-04 17:45:01', 'Saurabh Bansal, Neelesh Jain, Neelesh Jain, Neelesh Jain'),
(19, 'FPGA Based Adaptive Filter for Removal of High Frequency Noise from Electrocardiogram Signal.', 'Improvements in capacity, performance and decrease in cost, FPGAs have become a viable solution for making custom chips and programmable DSP devices. High frequency noise consist of Muscle contraction, Electromagnetic interference etc. High frequency noise generate rapid fluctuation which is very faster than Electrocardiogram (ECG) wave. High frequency may be in the range of 100 to 10 KHz and duration is 50 ms. In this paper presents Design and implementation of a architecture for a LMS based Adaptive filter to minimize the high frequency noise from (ECG) signal. This architecture is implemented on FPGA using Spartan 3s400pq208-4 board and Xilinx system Generator (XSG) software. The signals under experiment are retrieved from MIT-BIH database and are added with high frequency noise. Efficient removal of high frequency noise is verified and observations are noted for getting desirable SNR.This research work is carried out by using FPGA for adaptive filter using LMS Algorithm to remove High frequency noise with preventing high frequency component of ECG signal.', '6890a489a9d4f_3.14003.pdf', 1, 'submitted', '2025-08-04 12:16:09', 19, '2025-08-04 17:46:09', 'Anil M. Kasture, P. C. Bhaskar'),
(21, 'Modification and Development of Roof Top Ventilation and Power Generation', 'Wind energy is one of renewable energies available and it is ecological. Therefore, presently, there is the technological development of applying wind energy for the electrical power generation. Wind energy will be used to replace fossil energy such as oil and coal which causes environmental pollution. This paper presents the electric power generation by using Rooftop Turbine Ventilator (RTV). Rooftop ventilation system (RTV) generally used for ventilation purpose, can be used to extract wind power by suitably designing a generator attached to it. Rooftop Ventilation system do not consume any electrical power for its working. The paper elaborates the development of a power generation system using a typical RTV (Rooftop ventilation system). The paper emphasizes on the materials and the construction methodology adopted for developing a Rooftop power producing system. The RTV (Rooftop ventilation system) power generation system is designed to charge a battery and power up the LED lighting load connected to it. Speed of 150 rpm. The modified roof ventilator that can generate electricity. The new Change in the roof ventilator system is by attaching the extra fins to help it to rotate faster and more efficient. This system is suitable to use for the lowspeed wind places. The system is containing the combination of the AC generator, roof ventilator, solar charger, batteries and inverter. The operational concept of the system is the load will use the energy from the batteries that charged using roof ventilator. The observed performances of system are the voltage and current of the roof ventilator, batteries and the load. This project is about generating electricity from Rooftop Turbine Ventilator (RTV). Generally, RTV (Rooftop ventilation system) are used for ventilation purpose. A standard RVT generally mounted on rooftops of building. We are using this RTV (Rooftop ventilation system) for electricity generation. It. It can produce electricity with the help of low wind speed. Wind energy is renewable energy source. We will be using inverter to convert DC to AC and operate light load or for other applications. Wind energy is a renewable energy which can be adapted for many applications such as water pumping, domestic air ventilation and electricity generation because wind is clean form of energy that does not cause pollution to environment.', '6891f862cb7e5_1.1701007.pdf', 1, 'submitted', '2025-08-05 12:26:10', 20, '2025-08-05 17:56:10', 'Ajinkya Vidhate, Devang Ahire, Vijay Nikam, Ravikant Sharma, Jaywant Yadav, Prachi Subhash Kapase, Vikram Keru Dhatrak'),
(22, 'Intelligent Street Light System for Smart City', 'The electricity consumption in public places is increasing with enormous speed daily in developing countries like India. As contrasted and the utilization, the electricity generation process is growing with very little pace. Also, nowadays human life has become so busy that he didn\'t get time to switch off the light wherever not required. The current structure looks like the street lights that will be traded in the night prior to the sun sets and switched off the next morning after there is satisfactory light in the city. In this paper, we are presenting the best answer for electrical power wastage. Here, with the help of advanced embedded system design, it can be possible to enormously save the energy consumed by street lights, especially on highways. Additionally, the manual task of switching off the lighting framework is totally dispensed with this proposed system. Here the IR sensor module network is used which is a blend of IR LED and photodiode to identify the presence of vehicles out and about. The microcontroller atmega 328p is programmed using embedded D programming language and used as the frontal cortex to control. Finally, the framework has been effectively composed and actualized as a model framework. With the results and graph, it can be concluded that in, the proposed system 50-60 % less energy is consumed than in the regular system. Also, LDR is used here so that during the daytime light should remain turned of', '6891f89d3b363_2.170107.pdf', 1, 'submitted', '2025-08-05 12:27:09', 20, '2025-08-05 17:57:09', 'Rahul V. Awathankar, Gayatri M. Phade, Omkar S. Vaidya, Vaibhav Joshi, Kavita Patil'),
(23, 'Design and Development of Plastic Reprocessing Grinding Machine', 'ABSTRACTPlastic is undoubtedly to reign among the variety of materialsfor its varied applications; engineering machinery parts todomestic appliances to packaging’s. Plastic causes seriousenvironmental problems. Although they are not intrinsicallydangerous, they take up a huge amount of space in landfillsand they are made from a non-renewable resources, namelyfossil fuels for this reasons it is important that, where possibleplastics are recycled. The use of plastic is increased now daysin many industries like automobile, packaging, medical, etc.as it is easier to manufacture, handle and reliable to use andalso at large scale with low cost.The available machines used to recycle the plasticwaste are very costly. They pack this waste and give them tothe local processing plants. So the process of packaging andtransporting is much costly. So our intension behind thisproject is to process the waste plastic bottles as cheap aspossible by cutting where it is made for reducing of laborwork which results in cost reduction. A new cutting machineis designed to increase the output of the existing grindingmachine.This project describes about the design andexperimentation of modified plastic bottle grinder. The ideabehind the project is to increase the output of the existingmachine without completely changing its whole assembly andonly changing its cutter-rotor assembly and obtain requiredsize of flakes.', '6891f98a05260_3.170108.pdf', 1, 'submitted', '2025-08-05 12:31:06', 20, '2025-08-05 18:01:06', 'Pallavi A. Gade, Kanchan A. More, Vidya S. Visave, Vishal Vighe'),
(24, 'A Literature Review on Experimental Investigation of Parameters in Turning of AISI 52100 Steel using Coated and Uncoated Tools', 'The experimentalinvestigation during machining of any steel material is by considering parameters, like true rake angle and side cutting edge angle, feed rate, cutting speed, depth of cut, nose radius, machining time etc. Here we have done literature review of effect of these parameters on different steel material considering CBN inserts. Different types of coating for dry machining is analyzed to obtain results. These results are comparable and will help us to find a methodology to improve tool life as well as productivity of high strength steel material.', '6891f9d630710_4.170109.pdf', 1, 'submitted', '2025-08-05 12:32:22', 20, '2025-08-05 18:02:22', 'Prof.Pankaj S.Shirsath, Prof.Vivek P. Kolhe, Prof. Shashikant A. Pekhale, Vaibhav S.Thakur'),
(25, 'Finite Element Analysis of Electric Golf Cart Chassis', 'The automotive chassis is an important part of an automobile. The chassis serves as a framework for supporting the body and different parts of the automobile. Also, it should be rigid enough to withstand shock, twist, vibration, and other stresses. Along with strength, an essential consideration in chassis design is adequate bending stiffness for better handling characteristics. So, maximum stress, maximum equilateral stress, and deflection are essential criteria for the design of the chassis. This report is the work performed towards optimising the automotive chassis with constraints of maximum shear stress, equivalent stress, and deflection of chassis under maximum load. Structural systems like the chassis can be easily analysed using finite element techniques. sensitivity analysis is carried out for weight reduction. So a proper finite element model of the chassis is to be developed. The chassis is modeled in PRO-E. FEA is done on the mode-led chassis using the ANSYS Workbench', '6891fa4c738be_5.1701010.pdf', 1, 'submitted', '2025-08-05 12:34:20', 20, '2025-08-05 18:04:20', 'Santosh D Katkade, Vasim A Shaikh, Mahesh S Bankar, Gajanan Z Jadhav, Suyog Shinde, Akash Deore'),
(26, 'Air Quality Prediction Using Recurrent Neural Network', 'Pollution effect on humanoid fitness and the environment. Forecast air quality by using machine learning. We developed a method to forecast the Air Quality Index on prior time information about pollution. We develop a model using machine learning methods such as Simple-RNN, Simple-LSTM, and Stack-LSTM. In this paper, we concentrate on Simple-RNN, Simple-LSTM and Stack-LSTM. In this experiment, we observed that Stack-LSTM give better result as compared to Simple-LSTM and simple-RNN.', '6891fb23adb12_1.14001.pdf', 1, 'submitted', '2025-08-05 12:37:55', 22, '2025-08-05 18:07:55', 'Shewta Borse, Dipak V. Patil'),
(27, 'A brief Survey on Self Pliant Prioritized Relocate Signal Power in VANET', 'Fast increase in the number of movable devices cars, motor cycle etc. causes traffic overcrowding at intersection of road. Because of that the difficulty to the public and stoppage in time and services of urgent situation Vehicle (EV), urgent situation Vehicle, such as ambulance, fire brigade etc, are either stuck or delay to the reach at destination causes heavy losses or chances of accident. To avoid this kind of scenario, Traffic control system should be an intelligent system and flexible in Management of wireless signal allocation, urgent situation EV has highest priority so maximum chances is that firstly if any heavy traffic is available still road will be cleared for the EV', '6891fb5644fe7_2.14002.pdf', 1, 'submitted', '2025-08-05 12:38:46', 22, '2025-08-05 18:08:46', 'Mr.Kanchan B.Mahajan, Mr.Nikhil L.Kulkarni, Mrs.Bharati A.Patil, Mr.Pradnyesh J.Bhisikar'),
(28, 'Intoxicated Driver Recognition using Car Ignition Lock-A Brief Survey', 'Now days many issues of accidental are happen due to ingestion of alcohol. Every time it\'s reported about2.3 million unseasonable deaths due to dangerous consumption of alcohol. In this research we proposed alcohol discovery for use in machine ignition locking system using Arduino. The temperature of the breath sample measured by temperature detector A detector is used for a specific volume of the breath sample, which is used to determine the alcohol content. A reading which represents the breath alcohol content of the breath sample done by a Micro Controller. This analysis is used as part of an overall machine ignition locking system which prohibits starting the auto when the driver is compulsive. The system also requires rolling finals to insure that the motorist is still sober.', '6891fb881414c_3.14003.pdf', 1, 'submitted', '2025-08-05 12:39:36', 22, '2025-08-05 18:09:36', 'Mr.Amit H. Palve, Mr. Kanchan B. Mahajan, Mr. Nikhil L. Kulkarni, Mr. Pradnyesh J. Bhisikar'),
(29, 'Starvation Prediction’s: A Review', 'This is the research paper based on people about malnutrition. Its imbalance between body requirements and the input of nutrients which can lead to nutritive complaint or starvation. The early discovery of malnutrition can help the patient to reduce unborn damage and expenditure on treatment of it. The Malnutrition Sensor will take the patient’s name, height, weight, age etc. as input and show the nutrition position of the patient. The patient only have to install the operation fill his details and the app will induce the nutrition position of patient and also suggest the diet and exercise and in worst cases the help of the nutritionist will be suggested.', '6891fc1f33bda_4.14004.pdf', 1, 'submitted', '2025-08-05 12:42:07', 22, '2025-08-05 18:12:07', 'Mr.Kanchan B.Mahajan, Mr.Nikhil L.Kulkarni, Mrs.Bharati A.Patil, Mr.Pradnyesh J.Bhisikar'),
(30, 'Probability of Fuzzy Clustering for betterment the Purpose Function of K-Means Cluster', 'Clustering is a separation of data particulars into groups of similar objects. Each group, called cluster, consists of objects that are analogous between themselves and different to objects of other groups. The k- Means clustering system is one of the classical and simplest styles for data clustering. It\'s one of the most widely used styles in practical executions because of its simplicity. But intermittently the performing class values don\'t always correspond well to the degrees of belonging of the data, so to overcome the problems in hard Kmeans clustering, the Fuzzy K- Means clustering approach is proposed. fuzzy clustering forms clusters analogous that data object can belong to further than one cluster grounded on their class situations, In the being system deduction structure ideal function is used, it introduced saw tooth nature in objective function. In this paper feasibility of fuzzy partition matrix of objective function in kmeans clustering is proposed, it provides smoothness in aphorism tooth nature in objective function, which is main reason for the perfecting the objective function.', '6891fc4edb1e7_5.14005.pdf', 1, 'submitted', '2025-08-05 12:42:54', 22, '2025-08-05 18:12:54', 'Mrs. Pooja R. Kotwal, Mr.Sunil M. Kale, Mrs.Bharati A.Patil, Mr.Pradnyesh J.Bhisikar'),
(31, 'Modification and Development of Roof Top Ventilation and Power Generation', 'Wind energy is one of renewable energies available and it is ecological. Therefore, presently, there is the technological development of applying wind energy for the electrical power generation. Wind energy will be used to replace fossil energy such as oil and coal which causes environmental pollution. This paper presents the electric power generation by using Rooftop Turbine Ventilator (RTV). Rooftop ventilation system (RTV) generally used for ventilation purpose, can be used to extract wind power by suitably designing a generator attached to it. Rooftop Ventilation system do not consume any electrical power for its working. The paper elaborates the development of a power generation system using a typical RTV (Rooftop ventilation system). The paper emphasizes on the materials and the construction methodology adopted for developing a Rooftop power producing system. The RTV (Rooftop ventilation system) power generation system is designed to charge a battery and power up the LED lighting load connected to it. Speed of 150 rpm. The modified roof ventilator that can generate electricity. The new Change in the roof ventilator system is by attaching the extra fins to help it to rotate faster and more efficient. This system is suitable to use for the lowspeed wind places. The system is containing the combination of the AC generator, roof ventilator, solar charger, batteries and inverter. The operational concept of the system is the load will use the energy from the batteries that charged using roof ventilator. The observed performances of system are the voltage and current of the roof ventilator, batteries and the load. This project is about generating electricity from Rooftop Turbine Ventilator (RTV). Generally, RTV (Rooftop ventilation system) are used for ventilation purpose. A standard RVT generally mounted on rooftops of building. We are using this RTV (Rooftop ventilation system) for electricity generation. It. It can produce electricity with the help of low wind speed. Wind energy is renewable energy source. We will be using inverter to convert DC to AC and operate light load or for other applications. Wind energy is a renewable energy which can be adapted for many applications such as water pumping, domestic air ventilation and electricity generation because wind is clean form of energy that does not cause pollution to environment.', '6891fcad4323d_1.1701007.pdf', 1, 'submitted', '2025-08-05 12:44:29', 21, '2025-08-05 18:14:29', 'Ajinkya Vidhate, Devang Ahire, Vijay Nikam, Ravikant Sharma, Jaywant Yadav, Prachi Subhash Kapase, Vikram Keru Dhatrak'),
(32, 'Intelligent Street Light System for Smart City', 'The electricity consumption in public places is increasing with enormous speed daily in developing countries like India. As contrasted and the utilization, the electricity generation process is growing with very little pace. Also, nowadays human life has become so busy that he didn\'t get time to switch off the light wherever not required. The current structure looks like the street lights that will be traded in the night prior to the sun sets and switched off the next morning after there is satisfactory light in the city. In this paper, we are presenting the best answer for electrical power wastage. Here, with the help of advanced embedded system design, it can be possible to enormously save the energy consumed by street lights, especially on highways. Additionally, the manual task of switching off the lighting framework is totally dispensed with this proposed system. Here the IR sensor module network is used which is a blend of IR LED and photodiode to identify the presence of vehicles out and about. The microcontroller atmega 328p is programmed using embedded D programming language and used as the frontal cortex to control. Finally, the framework has been effectively composed and actualized as a model framework. With the results and graph, it can be concluded that in, the proposed system 50-60 % less energy is consumed than in the regular system. Also, LDR is used here so that during the daytime light should remain turned off.\r\n', '6891fcf41314f_2.170107.pdf', 1, 'submitted', '2025-08-05 12:45:40', 21, '2025-08-05 18:15:40', 'Rahul V. Awathankar, Gayatri M. Phade, Omkar S. Vaidya, Vaibhav Joshi, Kavita Patil'),
(33, 'Design and Development of Plastic Reprocessing Grinding Machine', 'Plastic is undoubtedly to reign among the variety of materials for its varied applications; engineering machinery parts to domestic appliances to packaging’s. Plastic causes serious environmental problems. Although they are not intrinsically dangerous, they take up a huge amount of space in landfills and they are made from a non-renewable resources, namely fossil fuels for this reasons it is important that, where possible plastics are recycled. The use of plastic is increased now days in many industries like automobile, packaging, medical, etc. as it is easier to manufacture, handle and reliable to use and also at large scale with low cost. The available machines used to recycle the plastic waste are very costly. They pack this waste and give them to the local processing plants. So the process of packaging and transporting is much costly. So our intension behind this project is to process the waste plastic bottles as cheap as possible by cutting where it is made for reducing of labor work which results in cost reduction. A new cutting machine is designed to increase the output of the existing grinding machine. This project describes about the design and experimentation of modified plastic bottle grinder. The idea behind the project is to increase the output of the existing machine without completely changing its whole assembly and only changing its cutter-rotor assembly and obtain required size of flakes.', '6891fd1f35f00_3.170108.pdf', 1, 'submitted', '2025-08-05 12:46:23', 21, '2025-08-05 18:16:23', 'Pallavi A. Gade, Kanchan A. More, Vidya S. Visave, Vishal Vighe'),
(34, 'A Literature Review on Experimental Investigation of Parameters in Turning of AISI 52100 Steel using Coated and Uncoated Tools', 'The experimentalinvestigation during machining of any steel material is by considering parameters, like true rake angle and side cutting edge angle, feed rate, cutting speed, depth of cut, nose radius, machining time etc. Here we have done literature review of effect of these parameters on different steel material considering CBN inserts. Different types of coating for dry machining is analyzed to obtain results. These results are comparable and will help us to find a methodology to improve tool life as well as productivity of high strength steel material.', 'Fake News Detection Using Machine Learning Algorithms A Review.pdf', 2, 'submitted', '2025-08-05 12:47:16', 21, '2025-08-05 18:17:16', 'Prof.Pankaj S.Shirsath, Prof.Vivek P. Kolhe, Prof. Shashikant A. Pekhale, Vaibhav S.Thakurxcvasf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `papers`
--
ALTER TABLE `papers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issue_id` (`issue_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `papers`
--
ALTER TABLE `papers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `papers`
--
ALTER TABLE `papers`
  ADD CONSTRAINT `papers_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issues` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
