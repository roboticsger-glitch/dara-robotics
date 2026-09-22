"use client";
import { useEffect, useState } from "react";
const translations: Record<string,string>={Robots:"الروبوتات",Solutions:"الحلول",Services:"الخدمات",About:"من نحن",Contact:"اتصل بنا","Request a Quote":"اطلب عرض سعر","Explore Robots":"استكشف الروبوتات",Purchase:"شراء",Rental:"تأجير","Local Integration":"تكامل محلي",Hospitality:"الضيافة",Facilities:"إدارة المرافق",Logistics:"الخدمات اللوجستية",Manufacturing:"التصنيع",Inspection:"الفحص والتفتيش",INDUSTRIES:"القطاعات",SERVICES:"الخدمات","ROBOT CATALOGUE":"كتالوج الروبوتات"};
Object.assign(translations,{"View All Robots":"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u0627\u062a","Robotic Arms":"\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629","Healthcare Assistant Robots":"\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u0627\u0644\u0631\u0639\u0627\u064a\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0635\u062d\u064a\u0629","Hotel Service Robots":"\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0641\u0646\u0627\u062f\u0642 \u0648\u0627\u0644\u0636\u064a\u0627\u0641\u0629","Autonomous Cleaning Robots":"\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u0627\u0644\u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0630\u0627\u062a\u064a","Reception & Guest Experience Robots":"\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0648\u062e\u062f\u0645\u0629 \u0627\u0644\u0636\u064a\u0648\u0641"});Object.assign(translations,{"ROBOTIC ARMS":"\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629","Choose the right robotic arm.":"\u0627\u062e\u062a\u0631 \u0627\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a \u0627\u0644\u0645\u0646\u0627\u0633\u0628.","Explore different arm types and find the platform that fits your task, environment and production goals.":"\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0623\u0630\u0631\u0639 \u0648\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0645\u0647\u0645\u062a\u0643 \u0648\u0628\u064a\u0626\u062a\u0643 \u0648\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u0625\u0646\u062a\u0627\u062c.","ARM CATEGORIES":"\u0641\u0626\u0627\u062a \u0627\u0644\u0623\u0630\u0631\u0639","Different arms for different jobs.":"\u0623\u0630\u0631\u0639 \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0645\u0647\u0627\u0645 \u0645\u062e\u062a\u0644\u0641\u0629.","We help you select the arm, gripper, vision, safety and integration package for your operation.":"\u0646\u0633\u0627\u0639\u062f\u0643 \u0641\u064a \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0630\u0631\u0627\u0639 \u0648\u0623\u062f\u0627\u0629 \u0627\u0644\u0625\u0645\u0633\u0627\u0643 \u0648\u0627\u0644\u0631\u0624\u064a\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u062d\u0632\u0645\u0629 \u0627\u0644\u0631\u0628\u0637 \u0644\u0639\u0645\u0644\u0643.","Collaborative Robot Arms":"\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u062a\u0639\u0627\u0648\u0646\u064a\u0629","6-Axis Industrial Arms":"\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629 \u0630\u0627\u062a \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0633\u062f\u0627\u0633\u064a","SCARA Robot Arms":"\u0623\u0630\u0631\u0639 SCARA \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629","Delta Robot Arms":"\u0623\u0630\u0631\u0639 \u062f\u064a\u0644\u062a\u0627 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629","Cartesian Robot Arms":"\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0627\u0644\u062f\u064a\u0643\u0627\u0631\u062a\u064a\u0629","Welding Robot Arms":"\u0623\u0630\u0631\u0639 \u0627\u0644\u0644\u062d\u0627\u0645 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629","Educational Robot Arms":"\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629","Hospitality Robot Arms":"\u0623\u0630\u0631\u0639 \u0627\u0644\u0636\u064a\u0627\u0641\u0629 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629","Safe, flexible cobots for people-focused tasks, assembly and service workflows.":"\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u062a\u0639\u0627\u0648\u0646\u064a\u0629 \u0622\u0645\u0646\u0629 \u0648\u0645\u0631\u0646\u0629 \u0644\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u0627\u0644\u062a\u0631\u0643\u064a\u0628 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a.","Discuss this arm":"\u0646\u0646\u0627\u0642\u0634 \u0647\u0630\u0627 \u0627\u0644\u0630\u0631\u0627\u0639"});Object.assign(translations,{
"High-reach, high-repeatability arms for manufacturing, welding and machine tending.":"\u0623\u0630\u0631\u0639 \u0630\u0627\u062a \u0645\u062f\u0649 \u062a\u0634\u063a\u064a\u0644 \u0648\u062a\u0643\u0631\u0627\u0631\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u0644\u0644\u062a\u0635\u0646\u064a\u0639 \u0648\u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u062a\u063a\u0630\u064a\u0629 \u0627\u0644\u0622\u0644\u0627\u062a.",
"Fast horizontal assembly, sorting and pick-and-place for compact production cells.":"\u062a\u062c\u0645\u064a\u0639 \u0648\u0641\u0631\u0632 \u0648\u0627\u0644\u062a\u0642\u0627\u0637 \u0648\u0648\u0636\u0639 \u0633\u0631\u064a\u0639 \u0644\u062e\u0644\u0627\u064a\u0627 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0645\u062f\u0645\u062c\u0629.",
"High-speed picking, packing and sorting for food, consumer goods and logistics.":"\u0627\u0644\u062a\u0642\u0627\u0637 \u0648\u062a\u0639\u0628\u0626\u0629 \u0648\u0641\u0631\u0632 \u0639\u0627\u0644\u064a \u0627\u0644\u0633\u0631\u0639\u0629 \u0644\u0644\u0623\u063a\u0630\u064a\u0629 \u0648\u0627\u0644\u0633\u0644\u0639 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643\u064a\u0629 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0629.",
"Precise linear motion for CNC loading, dispensing, 3D printing and inspection.":"\u062d\u0631\u0643\u0629 \u062e\u0637\u064a\u0629 \u062f\u0642\u064a\u0642\u0629 \u0644\u062a\u063a\u0630\u064a\u0629 \u0622\u0644\u0627\u062a CNC \u0648\u0627\u0644\u062a\u0648\u0632\u064a\u0639 \u0648\u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u062b\u0644\u0627\u062b\u064a\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062f \u0648\u0627\u0644\u0641\u062d\u0635.",
"Repeatable welding and fabrication with torches, positioners and safety systems.":"\u0644\u062d\u0627\u0645 \u0648\u062a\u0635\u0646\u064a\u0639 \u0645\u062a\u0643\u0631\u0631 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0634\u0627\u0639\u0644 \u0648\u0645\u0648\u0636\u0639\u0627\u062a \u0648\u0623\u0646\u0638\u0645\u0629 \u0633\u0644\u0627\u0645\u0629.",
"Accessible platforms for universities, schools, laboratories and training.":"\u0645\u0646\u0635\u0627\u062a \u0645\u064a\u0633\u0631\u0629 \u0644\u0644\u062c\u0627\u0645\u0639\u0627\u062a \u0648\u0627\u0644\u0645\u062f\u0627\u0631\u0633 \u0648\u0627\u0644\u0645\u062e\u062a\u0628\u0631\u0627\u062a \u0648\u0627\u0644\u062a\u062f\u0631\u064a\u0628.",
"Configured arms for coffee, tea, guest service and majalis applications.":"\u0623\u0630\u0631\u0639 \u0645\u062c\u0647\u0632\u0629 \u0644\u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u0642\u0647\u0648\u0629 \u0648\u0627\u0644\u0634\u0627\u064a \u0648\u062e\u062f\u0645\u0629 \u0627\u0644\u0636\u064a\u0648\u0641 \u0648\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u062c\u0627\u0644\u0633."
});
Object.assign(translations,{
"Explore practical robotic arm solutions for hospitality, fabrication and industrial operations.":"\u0627\u0633\u062a\u0643\u0634\u0641 \u062d\u0644\u0648\u0644 \u0630\u0631\u0627\u0639 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0639\u0645\u0644\u064a\u0629 \u0644\u0644\u0636\u064a\u0627\u0641\u0629 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0648\u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0635\u0646\u0627\u0639\u064a.",
"Solutions for different tasks.":"\u062d\u0644\u0648\u0644 \u0644\u0645\u0647\u0627\u0645 \u0645\u062a\u0646\u0648\u0639\u0629.",
"Choose a category to see the type of robotic solution that fits your work.":"\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0626\u0629 \u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u062d\u0644 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0644\u0639\u0645\u0644\u0643.",
"Coffee & Tea Preparation":"\u062a\u062d\u0636\u064a\u0631 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0642\u0647\u0648\u0629 \u0648\u0627\u0644\u0634\u0627\u064a",
"Welding & Fabrication":"\u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639",
"Majalis & Diwaniya Service":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u062c\u0627\u0644\u0633 \u0648\u0627\u0644\u062f\u064a\u0648\u0627\u0646\u064a",
"Industrial Welding":"\u0627\u0644\u0644\u062d\u0627\u0645 \u0627\u0644\u0635\u0646\u0627\u0639\u064a",
"Robotic solutions for preparing and serving Arabic coffee, tea, espresso and other beverages with consistent quality.":"\u062d\u0644\u0648\u0644 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0644\u062a\u062d\u0636\u064a\u0631 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0642\u0647\u0648\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0634\u0627\u064a \u0648\u0627\u0644\u0625\u0633\u0628\u0631\u064a\u0633\u0648 \u0648\u063a\u064a\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0628\u062c\u0648\u062f\u0629 \u0645\u062a\u0633\u0642\u0629.",
"Robotic welding, cutting and finishing solutions for workshops, factories and production lines.":"\u062d\u0644\u0648\u0644 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0644\u0644\u062d\u0627\u0645 \u0648\u0627\u0644\u0642\u0637\u0639 \u0648\u0627\u0644\u062a\u0634\u0637\u064a\u0628 \u0641\u064a \u0627\u0644\u0648\u0631\u0634 \u0648\u0627\u0644\u0645\u0635\u0627\u0646\u0639 \u0648\u062e\u0637\u0648\u0637 \u0627\u0644\u0625\u0646\u062a\u0627\u062c.",
"Robotic assistance for serving guests, presenting coffee and tea, and moving items safely in majalis and diwaniyas.":"\u0645\u0633\u0627\u0639\u062f\u0629 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0636\u064a\u0648\u0641 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0642\u0647\u0648\u0629 \u0648\u0627\u0644\u0634\u0627\u064a \u0648\u0646\u0642\u0644 \u0627\u0644\u0623\u063a\u0631\u0627\u0636 \u0628\u0623\u0645\u0627\u0646 \u0641\u064a \u0627\u0644\u0645\u062c\u0627\u0644\u0633 \u0648\u0627\u0644\u062f\u064a\u0648\u0627\u0646\u064a.",
"Repeatable welding automation for accurate joints, higher throughput and safer industrial operations.":"\u0623\u062a\u0645\u062a\u0629 \u0644\u062d\u0627\u0645 \u0645\u062a\u0643\u0631\u0631 \u0644\u0648\u0635\u0644\u0627\u062a \u062f\u0642\u064a\u0642\u0629 \u0648\u0625\u0646\u062a\u0627\u062c\u064a\u0629 \u0623\u0639\u0644\u0649 \u0648\u062a\u0634\u063a\u064a\u0644 \u0635\u0646\u0627\u0639\u064a \u0623\u0643\u062b\u0631 \u0623\u0645\u0627\u0646\u0627."
});
Object.assign(translations,{"Robotic arms":"\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629"});
Object.assign(translations,{
"Solutions":"الحلول",
"Robot Catalogue":"كتالوج الروبوتات",
"Industries":"القطاعات",
"Integration & Support":"الربط والدعم",
"Company":"الشركة",
"About":"من نحن",
"Contact":"اتصل بنا",
"Admin":"الإدارة",
"Location to be confirmed":"الموقع قيد التأكيد",
"To be confirmed":"سيتم التأكيد",
"Robotics, automation and AI solutions for businesses.":"حلول الروبوتات والأتمتة والذكاء الاصطناعي للشركات.",
"Robots shown on this demo website are representative catalogue concepts. Replace them with your approved supplier models before launch.":"الروبوتات المعروضة في موقع التجربة تمثل مفاهيم تقليدية لكتالوج الروبوتات. يرجى استبدالها بنماذج الموردين المعتمدين قبل الإطلاق.",
"Built for B2B robotics sales, rental & RaaS.":"مصمم لمبيع وتأجير الروبوتات لقطاع الأعمال ونماذج الروبوتات كخدمة."
});
Object.assign(translations,{"ROBOTIC ARM APPLICATIONS":"\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629","Robotic arms for different applications.":"\u0623\u0630\u0631\u0639 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0644\u0645\u062e\u062a\u0644\u0641 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a.","Choose an application to find the robotic solution that fits your business needs.":"\u0627\u062e\u062a\u0631 \u0645\u062c\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u062d\u0644 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0644\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0639\u0645\u0644\u0643."});
Object.assign(translations,{"Advanced robotic arm solutions.":"\u062d\u0644\u0648\u0644 \u0645\u062a\u0642\u062f\u0645\u0629 \u0628\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629"});
Object.assign(translations,{"Custom Robotic Arms":"\u0623\u0630\u0631\u0639 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0645\u062e\u0635\u0635\u0629"});
Object.assign(translations,{"Majalis Service":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u062c\u0627\u0644\u0633","Flexible robotic arm configurations designed around your specific task, workspace and workflow.":"\u062a\u0643\u0648\u064a\u0646\u0627\u062a \u0645\u0631\u0646\u0629 \u0644\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a \u0645\u0635\u0645\u0645\u0629 \u0648\u0641\u0642 \u0645\u0647\u0645\u062a\u0643 \u0648\u0645\u0633\u0627\u062d\u0629 \u0639\u0645\u0644\u0643 \u0648\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0639\u0645\u0644."});
Object.assign(translations,{
"ROBOTIC COFFEE PREPARATION":"تحضير القهوة بالروبوت",
"Robotic Coffee Preparation":"تحضير القهوة بالروبوت",
"Automated coffee and beverage preparation for cafés, hotels, lounges, events, and hospitality spaces.":"تحضير آلي للقهوة والمشروبات للمقاهي والفنادق والصالات والفعاليات ومساحات الضيافة.",
"Discuss Your Coffee Automation Project":"نناقش مشروع أتمتة القهوة",
"THE WORKFLOW":"آلية العمل",
"How It Works":"كيف يعمل الحل",
"Cup Positioning":"توضيع الكوب",
"The robotic system positions or identifies the cup for preparation.":"يقوم النظام بتوضيع الكوب أو تحديد موقعه للتحضير.",
"The robotic arm interacts with the configured coffee equipment.":"يتفاعل الذراع الروبوتي مع معدات القهوة المجهزة.",
"Pouring & Serving":"الصب والتقديم",
"The arm performs the programmed serving sequence.":"ينفذ الذراع تسلسل التقديم المبرمج.",
"Ready for the Next Order":"جاهز للطلب التالي",
"The system returns to its starting position for the next cycle.":"يعود النظام إلى وضعه الابتدائي للدورة التالية.",
"APPLICATIONS":"التطبيقات",
"Designed for Modern Hospitality":"مصمم للضيافة الحديثة",
"Cafés":"المقاهي",
"Hotels":"الفنادق",
"Airport Lounges":"صالات المطارات",
"Offices":"المكاتب",
"Events & Exhibitions":"الفعاليات والمعارض",
"Premium Hospitality Spaces":"مساحات الضيافة الفاخرة",
"CONFIGURATION AREAS":"مجالات التخصيص",
"Built Around Your Operation":"مصمم حول طريقة عملك",
"Every location and workflow is different. The robotic solution can be configured around the equipment, layout, and service experience required for your application.":"كل موقع وآلية عمل مختلفان. يمكن تخصيص الحل الروبوتي وفق المعدات والتوزيع وتجربة الخدمة المطلوبة لتطبيقك.",
"Robotic Arm Configuration":"تهيئة الذراع الروبوتي",
"Coffee Equipment Integration":"تكامل معدات القهوة",
"Cup Handling":"مناولة الأكواب",
"Vision & Detection":"الرؤية والتحديد",
"Custom Grippers and Tools":"أدوات ومقابض مخصصة",
"Counter & Workspace Layout":"توزيع الكاونتر ومساحة العمل",
"Drink Workflow":"آلية تقديم المشروب",
"Safety Integration":"تكامل السلامة",
"Customer Interface":"واجهة العميل",
"May be configured for the final project.":"قد يتم تخصيصه للمشروع النهائي.",
"SYSTEM WORKFLOW":"آلية النظام",
"Example System Workflow":"مثال على آلية النظام",
"Coffee Equipment":"معدات القهوة",
"Robotic Arm":"الذراع الروبوتي",
"Cup / Preparation Area":"الكوب / منطقة التحضير",
"Serving Area":"منطقة التقديم",
"Customer":"العميل",
"VALUE FOR YOUR TEAM":"قيمة لفريقك",
"Why Robotic Coffee Service?":"لماذا خدمة القهوة الروبوتية؟",
"Consistent Preparation":"تحضير متسق",
"Repeatable Movements":"حركات قابلة للتكرار",
"Modern Customer Experience":"تجربة عميل حديثة",
"Reduced Repetitive Manual Tasks":"تقليل المهام اليدوية المتكررة",
"Adaptable to Different Locations":"قابل للتكيف مع مواقع مختلفة",
"Designed for Repeatable Service Workflows":"مصمم لآليات خدمة قابلة للتكرار",
"Support a repeatable preparation sequence across service periods.":"دعم تسلسل تحضير متسق خلال فترات الخدمة.",
"Programmed movements can be reviewed and refined for the application.":"يمكن مراجعة الحركات المبرمجة وتحسينها وفق التطبيق.",
"Create a visible, memorable service moment for guests.":"إنشاء تجربة خدمة مميزة ولافتة للضيوف.",
"Help reduce repetitive serving movements for the team.":"المساعدة في تقليل حركات التقديم المتكررة للفريق.",
"Plan the solution around the available counter and service space.":"تخطيط الحل وفق مساحة الكاونتر والخدمة المتاحة.",
"Build a workflow around the equipment and service experience you need.":"بناء آلية عمل حول المعدات وتجربة الخدمة المطلوبة.",
"COFFEE SERVICE IN MOTION":"خدمة قهوة بحركة",
"A visible service experience for modern hospitality.":"تجربة خدمة لافتة للضيافة الحديثة.",
"START A CONVERSATION":"لنبدأ النقاش",
"Planning a Robotic Coffee Setup?":"تخطط لتجهيز قهوة روبوتي؟",
"Tell us about your location, equipment, and service requirements. We can help define a robotic-arm solution around your application.":"أخبرنا عن موقعك ومعداتك ومتطلبات الخدمة. يمكننا مساعدتك في تحديد حل للذراع الروبوتي وفق تطبيقك.",
"Discuss Your Project":"نناقش مشروعك"
});
Object.assign(translations,{"A robotic-arm solution for coffee preparation and serving in cafés, hotels, lounges and hospitality environments.":"\u062d\u0644 بالذراع \u0627ل\u0631\u0648\u0628و\u062a\u064a\u0629 \u0644\u062aحضير \u0648تقديم \u0627ل\u0642ه\u0648\u0629 \u0641ي \u0627ل\u0645قاه\u064a \u0648الفنادق \u0648\u0627ل\u0635\u0627لات \u0648\u0628\u064aئات \u0627ل\u0636يافة.","Configurable for your workspace":"\u0642\u0627بل \u0644لتخ\u0635\u064a\u0635 \u0648\u0641\u0642 \u0645\u0633\u0627\u062d\u0629 \u0639\u0645\u0644\u0643","Custom end-of-arm tooling":"\u0623\u062f\u0648\u0627\u062a \u0646\u0647\u0627\u064a\u0629 \u0630\u0631\u0627\u0639 \u0645\u062e\u0635\u0635\u0629","Coffee equipment integration":"\u062a\u0643\u0627\u0645\u0644 \u0645عدات \u0627ل\u0642\u0647و\u0629","Installation options available depending on the project":"\u062e\u064a\u0627\u0631\u0627\u062a \u062a\u0631\u0643\u064a\u0628 \u0645\u062a\u0627\u062d\u0629 \u0648فق \u0645\u062aطلبات \u0627\u0644\u0645\u0634\u0631\u0648\u0639","Final configuration and pricing depend on the selected robotic arm, tooling, integration and project requirements.":"\u064a\u0639\u062aمد \u0627\u0644ت\u0636\u0628\u064aط \u0627\u0644ن\u0647\u0627ئ\u064a \u0648السعر \u0639لى \u0627\u0644ذ\u0631\u0627ع \u0627لروبوت\u064a \u0648ال\u0623دوات \u0648الت\u0643امل \u0648\u0645\u062aطلبات \u0627لم\u0634\u0631وع","Contact us to purchase":"\u062a\u0648اصل \u0645عنا \u0644\u0644ش\u0631اء","Request a quotation":"\u0627\u0637\u0644ب \u0639رض \u0633عر"});
Object.assign(translations,{"Coffee equipment integration":"\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0631\u0628\u0637 \u0627\u0644\u0646\u0638\u0627\u0645 \u0628\u0645\u0639\u062f\u0627\u062a \u0648\u0622\u0644\u0627\u062a \u0627\u0644\u0642\u0647\u0648\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629"});Object.assign(translations,{"Starting from":"\u064a\u0628\u062f\u0623 \u0627\u0644\u0633\u0639\u0631 \u0645\u0646","Price provided after project assessment":"\u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0633\u0639\u0631 \u0628\u0639\u062f \u062f\u0631\u0627\u0633\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"});
Object.assign(translations,{"ROBOTIC WELDING":"\u0627\u0644\u0644\u062d\u0627\u0645 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a","Robotic Welding":"\u0627\u0644\u0644\u062d\u0627\u0645 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a","ROBOTIC MAJALIS SERVICE":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u062c\u0627\u0644\u0633 \u0628\u0627\u0644\u0631\u0648\u0628\u0648\u062a","Robotic Majalis Service":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u062c\u0627\u0644\u0633 \u0628\u0627\u0644\u0631\u0648\u0628\u0648\u062a","CUSTOM ROBOTIC ARMS":"\u0623\u0630\u0631\u0639 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0645\u062e\u0635\u0635\u0629","ROBOTIC CUSTOM ROBOTIC ARM":"\u0630\u0631\u0627\u0639 \u0631\u0648\u0628\u0648\u062a\u064a \u0645\u062e\u0635\u0635","Custom Robotic Arms":"\u0623\u0630\u0631\u0639 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0645\u062e\u0635\u0635\u0629","Majalis Service":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u062c\u0627\u0644\u0633"});
Object.assign(translations,{
"Robotic-arm welding and fabrication solutions for workshops, factories and production environments.":"حلول لحام وتصنيع بالذراع الروبوتية للورش والمصانع وبيئات الإنتاج.",
"Repeatable welding movements":"حركات لحام قابلة للتكرار",
"Configured tooling options":"خيارات أدوات مهيأة حسب التطبيق",
"Workspace and safety planning":"تخطيط مساحة العمل ومتطلبات السلامة",
"Integration based on project requirements":"تكامل وفق متطلبات المشروع",
"A robotic-arm service concept for presenting coffee and tea and supporting hospitality workflows in majalis and guest spaces.":"حل خدمة بالذراع الروبوتية لتقديم القهوة والشاي ودعم عمليات الضيافة في المجالس ومساحات استقبال الضيوف.",
"Configured for the service space":"تهيئة وفق مساحة الخدمة",
"Guest-facing service workflow":"آلية خدمة موجهة للضيوف",
"Custom tooling options":"خيارات أدوات مخصصة",
"Project-based integration":"تكامل وفق متطلبات المشروع",
"A robotic-arm solution configured around your specific task, workspace and workflow.":"حل بالذراع الروبوتية مهيأ وفق مهمتك ومساحة عملك وآلية التشغيل الخاصة بك.",
"Configuration around your task":"تهيئة وفق مهمتك",
"Workspace and equipment planning":"تخطيط مساحة العمل والمعدات",
"Project requirements review":"مراجعة متطلبات المشروع"
});
Object.assign(translations,{
"Robotic Coffee Preparation":"\u062d\u0644 \u0631\u0648\u0628\u0648\u062a\u064a \u0644\u062a\u062d\u0636\u064a\u0631 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0642\u0647\u0648\u0629",
"A robotic-arm solution for coffee preparation and serving in cafés, hotels, lounges and hospitality environments.":"\u062d\u0644 \u0645\u062a\u0643\u0627\u0645\u0644 \u0628\u0627\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0644\u062a\u062d\u0636\u064a\u0631 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0642\u0647\u0648\u0629 \u0645\u0635\u0645\u0645 \u0644\u0644\u0645\u0642\u0627\u0647\u064a \u0648\u0627\u0644\u0641\u0646\u0627\u062f\u0642 \u0648\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0636\u064a\u0627\u0641\u0629 \u0648\u0645\u062e\u062a\u0644\u0641 \u0628\u064a\u0626\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0629.",
"Starting from":"\u0627\u0644\u0633\u0639\u0631 \u064a\u0628\u062f\u0623 \u0645\u0646",
"Price provided after project assessment":"\u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0628\u0639\u062f \u062f\u0631\u0627\u0633\u0629 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
"Configurable for your workspace":"\u062a\u0635\u0645\u064a\u0645 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062e\u0635\u064a\u0635 \u0628\u0645\u0627 \u064a\u062a\u0646\u0627\u0633\u0628 \u0645\u0639 \u0645\u0633\u0627\u062d\u0629 \u0648\u062a\u062c\u0647\u064a\u0632\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639",
"Custom end-of-arm tooling":"\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0630\u0631\u0627\u0639 \u0628\u0623\u062f\u0627\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u062a\u062d\u0636\u064a\u0631 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0642\u0647\u0648\u0629",
"Coffee equipment integration":"\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0631\u0628\u0637 \u0645\u0639 \u0645\u0639\u062f\u0627\u062a \u0648\u0622\u0644\u0627\u062a \u0627\u0644\u0642\u0647\u0648\u0629",
"Installation options available depending on the project":"\u062e\u064a\u0627\u0631\u0627\u062a \u062a\u0631\u0643\u064a\u0628 \u0648\u062a\u062c\u0647\u064a\u0632 \u062d\u0633\u0628 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
"Final configuration and pricing depend on the selected robotic arm, tooling, integration and project requirements.":"\u064a\u0639\u062a\u0645\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0639\u0644\u0649 \u0646\u0648\u0639 \u0627\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u0645\u0639\u062f\u0627\u062a \u0627\u0644\u0642\u0647\u0648\u0629 \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u0628\u0637 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u0631\u0643\u064a\u0628 \u0641\u064a \u0627\u0644\u0645\u0648\u0642\u0639."
});
Object.assign(translations,{"Robotic Coffee Preparation":"\u0631\u0648\u0628\u0648\u062a \u0644\u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u0642\u0647\u0648\u0629"});
Object.assign(translations,{
"Robotic Welding":"\u0627\u0644\u0644\u062d\u0627\u0645 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a",
"Integrated robotic solutions for welding in factories, workshops and production lines, designed to support consistent, repeatable quality.":"\u062d\u0644\u0648\u0644 \u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0644\u062d\u0627\u0645 \u0641\u064a \u0627\u0644\u0645\u0635\u0627\u0646\u0639 \u0648\u0627\u0644\u0648\u0631\u0634 \u0648\u062e\u0637\u0648\u0637 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0645\u0635\u0645\u0645\u0629 \u0644\u0631\u0641\u0639 \u0627\u0644\u062f\u0642\u0629 \u0648\u0627\u0644\u0625\u0646\u062a\u0627\u062c\u064a\u0629 \u0648\u062a\u062d\u0642\u064a\u0642 \u062c\u0648\u062f\u0629 \u062b\u0627\u0628\u062a\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0643\u0631\u0627\u0631.",
"Designed Around Your Project":"\u062d\u0644\u0648\u0644 \u0645\u0635\u0645\u0645\u0629 \u062d\u0633\u0628 \u0627\u062d\u062a\u064a\u0627\u062c \u0645\u0634\u0631\u0648\u0639\u0643",
"Final pricing is determined after reviewing the welding process, required parts, work environment and integration requirements.":"\u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0628\u0639\u062f \u062f\u0631\u0627\u0633\u0629 \u0646\u0648\u0639 \u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u0628\u064a\u0626\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0631\u0628\u0637.",
"Supports applications such as MIG / MAG, TIG, spot welding and arc welding":"\u064a\u062f\u0639\u0645 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0645\u062b\u0644 MIG / MAG \u0648TIG \u0648\u0627\u0644\u0644\u062d\u0627\u0645 \u0627\u0644\u0646\u0642\u0637\u064a Spot Welding \u0648\u0627\u0644\u0644\u062d\u0627\u0645 \u0628\u0627\u0644\u0642\u0648\u0633 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a",
"Precise, repeatable welding movements":"\u062d\u0631\u0643\u0627\u062a \u0644\u062d\u0627\u0645 \u062f\u0642\u064a\u0642\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0643\u0631\u0627\u0631",
"Custom welding tools and equipment depending on the application":"\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u062a\u062e\u0635\u064a\u0635 \u0623\u062f\u0648\u0627\u062a \u0648\u0645\u0639\u062f\u0627\u062a \u0627\u0644\u0644\u062d\u0627\u0645 \u062d\u0633\u0628 \u0627\u0644\u062a\u0637\u0628\u064a\u0642",
"Workspace planning and safety requirements":"\u062a\u062e\u0637\u064a\u0637 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0633\u0644\u0627\u0645\u0629",
"Integration with existing production lines and systems":"\u0627\u0644\u0631\u0628\u0637 \u0645\u0639 \u062e\u0637\u0648\u0637 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629",
"Programmable welding paths for multiple products":"\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0628\u0631\u0645\u062c\u0629 \u0645\u0633\u0627\u0631\u0627\u062a \u0644\u062d\u0627\u0645 \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629",
"Final pricing depends on the robotic arm, welding process, welding source, required tooling, work area, safety requirements and on-site integration.":"\u064a\u0639\u062a\u0645\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0639\u0644\u0649 \u0646\u0648\u0639 \u0627\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0648\u0646\u0648\u0639 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0645\u0635\u062f\u0631 \u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u062d\u062c\u0645 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0631\u0628\u0637 \u0641\u064a \u0627\u0644\u0645\u0648\u0642\u0639.",
"Discuss Your Project With Us":"\u0646\u0627\u0642\u0634 \u0645\u0634\u0631\u0648\u0639\u0643 \u0645\u0639\u0646\u0627",
"Request a Quote":"\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631"
});
function applyLanguage(arabic:boolean){document.documentElement.lang=arabic?'ar':'en';document.documentElement.dir=arabic?'rtl':'ltr';const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node:Node|null;while(node=walker.nextNode()){const value=node.nodeValue?.trim();if(!value)continue;const translated=arabic?translations[value]:Object.entries(translations).find(([,v])=>v===value)?.[0];if(translated)node.nodeValue=node.nodeValue?.replace(value,translated)??translated;}}
Object.assign(translations,{"Coffee equipment integration":"\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0631\u0628\u0637 \u0627\u0644\u0646\u0638\u0627\u0645 \u0628\u0645\u0639\u062f\u0627\u062a \u0648\u0622\u0644\u0627\u062a \u0627\u0644\u0642\u0647\u0648\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629"});Object.assign(translations,{"Final pricing is determined after reviewing the welding process, required parts, work environment and integration requirements.":"\u064a\u064f\u062d\u062f\u0651\u064e\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0628\u0639\u062f \u0645\u0631\u0627\u062c\u0639\u0629 \u0646\u0648\u0639 \u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u0628\u064a\u0626\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0631\u0628\u0637."});Object.assign(translations,{"Final pricing is determined after reviewing the welding process, required parts, work environment and integration requirements.":"\u064a\u064f\u062d\u062f\u0651\u064e\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0628\u0639\u062f \u0645\u0631\u0627\u062c\u0639\u0629 \u0646\u0648\u0639 \u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u0628\u064a\u0626\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0631\u0628\u0637.","Final pricing depends on the robotic arm, welding process, welding source, required tooling, work area, safety requirements and on-site integration.":"\u064a\u0639\u062a\u0645\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0639\u0644\u0649 \u0646\u0648\u0639 \u0627\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a\u0629 \u0648\u0646\u0648\u0639 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0645\u0635\u062f\u0631 \u0627\u0644\u0644\u062d\u0627\u0645 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u062d\u062c\u0645 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0631\u0628\u0637 \u0641\u064a \u0627\u0644\u0645\u0648\u0642\u0639."});export function LanguageToggle(){
  const [arabic,setArabic]=useState(false);
  useEffect(()=>{
    const saved=localStorage.getItem('dara-language')==='ar';
    setArabic(saved);
    applyLanguage(saved);
    let translating=false;
    let queued=false;
    const observer=new MutationObserver(()=>{
      if(document.documentElement.lang!=="ar"||translating||queued)return;
      queued=true;
      window.setTimeout(()=>{
        queued=false;
        translating=true;
        applyLanguage(true);
        translating=false;
      },0);
    });
    observer.observe(document.body,{childList:true,subtree:true});
    return ()=>observer.disconnect();
  },[]);
  function toggle(){
    const next=!arabic;
    setArabic(next);
    localStorage.setItem('dara-language',next?'ar':'en');
    applyLanguage(next);
  }
  return <button className="language-toggle" type="button" onClick={toggle} aria-label={arabic ? "Switch to English" : "Switch to Arabic"}><span className={arabic ? "flag flag-gb" : "flag flag-sa"} aria-hidden="true" /> {arabic ? "EN" : "AR"}</button>
}