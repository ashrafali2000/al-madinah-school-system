import { useDashboardContext } from "../../../contextApi/dashboardContext";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContentContext } from "../../../contextApi/contentContext";
export default function UpdateForm() {
  const dataContext = useDashboardContext();
  const mainSection = dataContext.mainSection;
  const midSection = dataContext.midSection;
  const childSection = dataContext.childSection;

  // Start Main Page
  const [seniorSchoolImage, setSeniorSchoolImage] = useState<any>(null);
  const [middleSchoolImage, setMiddleSchoolImage] = useState<any>(null);
  const [whyChooseImageLeft, setWhyChooseImageLeft] = useState<any>(null);
  const [whyChooseImageRight, setWhyChooseImageRight] = useState<any>(null);
  const [firstImageLearningJourney, setFirstImageLearningJourney] =
    useState<any>(null);
  const [secondImageLearningJourney, setSecondImageLearningJourney] =
    useState<any>(null);
  const [thirdImageLearningJourney, setThirdImageLearningJourney] =
    useState<any>(null);
  const [fourthImageLearningJourney, setFourthImageLearningJourney] =
    useState<any>(null);
  const [heroSectionImagesList, setHeroSectionImagesList] = useState<any>([]);
  const [footerSectionImagesList, setFooterSectionImagesList] = useState<any>(
    []
  );
  const [uploadingHeroSectionImages, setUploadingHeroSectionImages] =
    useState(false);
  const [uploadingFooterSectionImages, setUploadingFooterSectionImages] =
    useState(false);
  const contentContext = useContentContext();
  const data = contentContext.content;
  // console.log("data=====from context=========>", data);
  const fetchAllData = data.filter((title: any) => "main-page" === title?.page);
  console.log("fetchAllData===========>", fetchAllData);
  const [formDataCotentsSeniorSchool, setFormDataCotentsSeniorSchool] =
    useState({});
  const [formDataCotentsMiddleSchool, setFormDataCotentsMiddleSchool] =
    useState({});
  const [formDataWhyChoose, setFormDataWhyChoose] = useState({});
  const [formDataSchoolFeatures, setFormDataSchoolFeatures] = useState({});
  const [formDataTeachingMethodology, setFormDataTeachingMethodology] =
    useState({});
  const [formDataTeachLearnFeatures, setFormDataTeachLearnFeatures] = useState(
    {}
  );
  const seniorSchoolChangeHandler = (e: any) => {
    setFormDataCotentsSeniorSchool({
      ...formDataCotentsSeniorSchool,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const middleSchoolChangeHandler = (e: any) => {
    setFormDataCotentsMiddleSchool({
      ...formDataCotentsMiddleSchool,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const whyChooseChangeHandler = (e: any) => {
    setFormDataWhyChoose({
      ...formDataWhyChoose,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const schoolFeatureChangeHandler = (e: any) => {
    setFormDataSchoolFeatures({
      ...formDataSchoolFeatures,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const teachingMethodologyChangeHandler = (e: any) => {
    setFormDataTeachingMethodology({
      ...formDataTeachingMethodology,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const teachLearnFeatureChangeHandler = (e: any) => {
    setFormDataTeachLearnFeatures({
      ...formDataTeachLearnFeatures,
      [e.target.id]: e.target.value.trim(),
    });
  };
  let hereSectionDataFromFirebase = fetchAllData?.filter(
    (doc: any) => doc.section === "heroSection"
  )[0];
  console.log(
    "hereSectionDataFromFirebase==============>",
    hereSectionDataFromFirebase
  );
  let text = hereSectionDataFromFirebase?.introductionText;
  console.log("text=========>", text);
  const [introductionText, setIntroductionText] = useState();
  const submitHandlerHeroSection = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");

    const newDocRef = doc(dataRef);

    try {
      let heroSectionSlider = heroSectionImagesList;

      const mainSection = {
        page: "main-page",
        section: "heroSection",
        heroSectionSlider,
        introductionText,
      };

      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerFooterSection = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");

    const newDocRef = doc(dataRef);

    try {
      let footerSectionSlider = footerSectionImagesList;

      const mainSection = {
        page: "main-page",
        section: "footerSection",
        footerSectionSlider,
      };

      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerSeniorSchool = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      let schoolImage;

      if (seniorSchoolImage) {
        const storageRef2 = ref(storage, "images/" + seniorSchoolImage?.name);
        const titleSnapshot2 = await uploadBytes(
          storageRef2,
          seniorSchoolImage
        );
        schoolImage = await getDownloadURL(titleSnapshot2.ref);
      } else {
        schoolImage = undefined;
      }
      const mainSection = {
        page: "main-page",
        section: "seniorSchool",
        image: schoolImage,
        formDataCotentsSeniorSchool,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerMiddleSchool = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      let schoolImage;

      if (middleSchoolImage) {
        const storageRef2 = ref(storage, "images/" + middleSchoolImage?.name);
        const titleSnapshot2 = await uploadBytes(
          storageRef2,
          middleSchoolImage
        );
        schoolImage = await getDownloadURL(titleSnapshot2.ref);
      } else {
        schoolImage = undefined;
      }
      const mainSection = {
        page: "main-page",
        section: "middleSchool",
        image: schoolImage,
        formDataCotentsMiddleSchool,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerWhyChooseALmadinah = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      let leftImage: any;
      let rightImage: any;

      if (whyChooseImageLeft && whyChooseImageRight) {
        const storageRef1 = ref(storage, "images/" + whyChooseImageLeft?.name);
        const titleSnapshot1 = await uploadBytes(
          storageRef1,
          whyChooseImageLeft
        );
        const storageRef2 = ref(storage, "images/" + whyChooseImageRight?.name);
        const titleSnapshot2 = await uploadBytes(
          storageRef2,
          whyChooseImageRight
        );
        leftImage = await getDownloadURL(titleSnapshot1.ref);
        rightImage = await getDownloadURL(titleSnapshot2.ref);
      } else {
        leftImage = undefined;
        rightImage = undefined;
      }
      const mainSection = {
        page: "main-page",
        section: "whyChooseAlmadinah",
        images: [leftImage, rightImage],
        formDataWhyChoose,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerLearningJourney = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      let firstImage: any;
      let secondImage: any;
      let thirdImage: any;
      let fourthImage: any;

      if (
        firstImageLearningJourney &&
        secondImageLearningJourney &&
        thirdImageLearningJourney &&
        fourthImageLearningJourney
      ) {
        const storageRef1 = ref(storage, "images/" + whyChooseImageLeft?.name);
        const titleSnapshot1 = await uploadBytes(
          storageRef1,
          firstImageLearningJourney
        );
        const storageRef2 = ref(storage, "images/" + whyChooseImageRight?.name);
        const titleSnapshot2 = await uploadBytes(
          storageRef2,
          secondImageLearningJourney
        );
        const storageRef3 = ref(storage, "images/" + whyChooseImageRight?.name);
        const titleSnapshot3 = await uploadBytes(
          storageRef3,
          thirdImageLearningJourney
        );
        const storageRef4 = ref(storage, "images/" + whyChooseImageRight?.name);
        const titleSnapshot4 = await uploadBytes(
          storageRef4,
          fourthImageLearningJourney
        );
        firstImage = await getDownloadURL(titleSnapshot1.ref);
        secondImage = await getDownloadURL(titleSnapshot2.ref);
        thirdImage = await getDownloadURL(titleSnapshot3.ref);
        fourthImage = await getDownloadURL(titleSnapshot4.ref);
      } else {
        firstImage = undefined;
        secondImage = undefined;
        thirdImage = undefined;
        fourthImage = undefined;
      }
      const mainSection = {
        page: "main-page",
        section: "learningJourney",
        images: [firstImage, secondImage, thirdImage, fourthImage],
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerSchoolSystemFeatures = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      const mainSection = {
        page: "main-page",
        section: "schoolSystemFeatures",
        formDataSchoolFeatures,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerTeachingMethodology = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      const mainSection = {
        page: "main-page",
        section: "teachingMethodology",
        formDataTeachingMethodology,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const submitHandlerLearnTeachFeatures = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      const mainSection = {
        page: "main-page",
        section: "teachLearnFeatures",
        formDataTeachLearnFeatures,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  const seniorSchoolImageMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setSeniorSchoolImage(file);
  };
  const middleSchoolImageMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setMiddleSchoolImage(file);
  };
  const whChooseImageLeftMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setWhyChooseImageLeft(file);
  };
  const whChooseImageRightMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setWhyChooseImageRight(file);
  };
  const firstImageLearningMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setFirstImageLearningJourney(file);
  };
  const secondImageLearningMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setSecondImageLearningJourney(file);
  };
  const thirdImageLearningMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setThirdImageLearningJourney(file);
  };
  const fourthImageLearningMainPageHandler = (e: any) => {
    const file = e.target.files[0];
    setFourthImageLearningJourney(file);
  };

  const heroImageMainPageHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingHeroSectionImages(true);

    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setHeroSectionImagesList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingHeroSectionImages(false);
  };
  const footerImageMainPageHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingFooterSectionImages(true);

    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/footer/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setFooterSectionImagesList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingFooterSectionImages(false);
  };

  // End Main Page

  // Start About Page
  // mission
  const [imageMission, setImageMission] = useState<any>(null);
  const [missionContents, setMissionContents] = useState();
  const missionAboutUsImageHandler = (e: any) => {
    const file = e.target.files[0];
    setImageMission(file);
  };
  const submitHandlerMissionSection = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      let missionImage;

      if (imageMission) {
        const storageRef2 = ref(storage, "images/" + imageMission?.name);
        const titleSnapshot2 = await uploadBytes(storageRef2, imageMission);
        missionImage = await getDownloadURL(titleSnapshot2.ref);
      } else {
        missionImage = undefined;
      }
      const mainSection = {
        page: "about-page",
        section: "mission",
        image: missionImage,
        missionContents,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };

  // vission
  const [imageVission, setImageVission] = useState<any>(null);
  const [vissionContents, setVissionContents] = useState();
  const vissionAboutUsImageHandler = (e: any) => {
    const file = e.target.files[0];
    setImageVission(file);
  };
  const submitHandlerVissionSection = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      let vissionImage;

      if (imageVission) {
        const storageRef2 = ref(storage, "images/" + imageVission?.name);
        const titleSnapshot2 = await uploadBytes(storageRef2, imageVission);
        vissionImage = await getDownloadURL(titleSnapshot2.ref);
      } else {
        vissionImage = undefined;
      }
      const mainSection = {
        page: "about-page",
        section: "vission",
        image: vissionImage,
        vissionContents,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  // value
  const [imageValue, setImageValue] = useState<any>(null);
  const [valueContents, setValueContents] = useState();
  const valueAboutUsImageHandler = (e: any) => {
    const file = e.target.files[0];
    setImageValue(file);
  };
  const submitHandlerValueSection = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      let valueImage;

      if (imageValue) {
        const storageRef2 = ref(storage, "images/" + imageValue?.name);
        const titleSnapshot2 = await uploadBytes(storageRef2, imageValue);
        valueImage = await getDownloadURL(titleSnapshot2.ref);
      } else {
        valueImage = undefined;
      }
      const mainSection = {
        page: "about-page",
        section: "value",
        image: valueImage,
        valueContents,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };

  // End About Page

  // start How we Teach

  const [
    formDataExtracurricularEnrichment,
    setFormDataExtracurricularEnrichment,
  ] = useState({});
  const extracurricularEnrichmentChangeHandler = (e: any) => {
    setFormDataExtracurricularEnrichment({
      ...formDataExtracurricularEnrichment,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const submitHandlerExtracurricularEnrichment = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      const mainSection = {
        page: "how-we-teach-page",
        section: "extracurricularEnrichment",
        formDataExtracurricularEnrichment,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  // Assessment and Evaluation

  const [formDataAssessmentEvaluation, setFormDataAssessmentEvaluation] =
    useState({});
  const assessmentEvaluationChangeHandler = (e: any) => {
    setFormDataAssessmentEvaluation({
      ...formDataAssessmentEvaluation,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const submitHandlerAssessmentEvaluation = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const newDocRef = doc(dataRef);
    try {
      const mainSection = {
        page: "how-we-teach-page",
        section: "assessmentEvaluation",
        formDataAssessmentEvaluation,
      };
      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };

  // End How we Teach
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <p className="mt-1 text-sm leading-6 text-gray-600">
        This Contents will be displayed publicly so be careful what you share.
      </p>
      <div className="flex gap-2 justify-center py-3 items-center">
        <span className="bg-teal-500 h-[2px] w-80"></span>
        <h3 className="text-xl py-1 px-2 rounded border-2 text-white  bg-teal-500">
          {mainSection}
        </h3>
        <span className="bg-teal-500 h-[2px] w-80"></span>
      </div>
      {mainSection === "Main Page" ? (
        <div className="mt-10 gap-x-6 gap-y-8">
          {/* HeroSection */}
          <form onSubmit={submitHandlerHeroSection}>
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="main-banner-slider"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add Hero Section Slider Images
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="main-banner-slider"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="main-banner-slider"
                          name="main-banner-slider"
                          type="file"
                          onChange={heroImageMainPageHandler}
                          multiple
                          className="sr-only"
                        />
                      </label>
                      {!uploadingHeroSectionImages ? (
                        <>
                          <p className="pl-1">or drag and drop</p>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingHeroSectionImages}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500">uploading Images ...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mainSection === "Main Page" && (
              <div className=" mt-4">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Introduction content:
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    value={introductionText}
                    onChange={(e: any) => setIntroductionText(e.target.value)}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Senior School */}
          <form onSubmit={submitHandlerSeniorSchool}>
            {mainSection === "Main Page" && (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-center py-3 items-center">
                  <span className="bg-teal-500 h-[2px] w-80"></span>
                  <h3 className="text-xl py-1 px-2 rounded border-2 border-teal-500">
                    Senior School
                  </h3>
                  <span className="bg-teal-500 h-[2px] w-80"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="">
                    <label
                      htmlFor="ramazan-slider"
                      className="block   text-sm font-medium leading-6 text-gray-900"
                    >
                      Senior School Picture
                    </label>

                    <div className=" flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="senior-school"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="senior-school"
                              name="senior-school"
                              type="file"
                              onChange={seniorSchoolImageMainPageHandler}
                              multiple
                              className="sr-only"
                            />
                          </label>
                          {/* {!uploadingRamzanSlider ? (
                              <>
                                <p className="pl-1">or drag and drop</p>
                                <p className="text-xs leading-5 text-gray-600">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </>
                            ) : (
                              <div className="flex flex-wrap gap-5">
                                <PropagateLoader
                                  color={"#36d7b7"}
                                  loading={uploadingRamzanSlider}
                                  size={12}
                                  aria-label="Loading Spinner"
                                  data-testid="loader"
                                />
                                <p className="text-teal-500 text-sm">
                                  uploading Images ...
                                </p>
                              </div>
                            )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Title
                      </label>
                      <div className="">
                        <input
                          id="seniorSchoolTitle"
                          name="seniorSchoolTitle"
                          onChange={seniorSchoolChangeHandler}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Key Stages
                      </label>
                      <div className="">
                        <input
                          id="seniorSchooKeyStages"
                          name="seniorSchooKeyStages"
                          onChange={seniorSchoolChangeHandler}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Years | Ages
                      </label>
                      <div className="">
                        <input
                          id="seniorSchooYearsAges"
                          name="seniorSchooYearsAges"
                          onChange={seniorSchoolChangeHandler}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Middle School */}
          <form onSubmit={submitHandlerMiddleSchool}>
            {mainSection === "Main Page" && (
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex gap-2 justify-center py-3 items-center">
                  <span className="bg-teal-500 h-[2px] w-80"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Middle School
                  </h3>
                  <span className="bg-teal-500 h-[2px] w-80"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="">
                    <label
                      htmlFor="ramazan-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Middle School Picture
                    </label>

                    <div className=" flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="middle-school"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="middle-school"
                              name="middle-school"
                              type="file"
                              onChange={middleSchoolImageMainPageHandler}
                              className="sr-only"
                            />
                          </label>
                          {/* {!uploadingRamzanSlider ? (
                              <>
                                <p className="pl-1">or drag and drop</p>
                                <p className="text-xs leading-5 text-gray-600">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </>
                            ) : (
                              <div className="flex flex-wrap gap-5">
                                <PropagateLoader
                                  color={"#36d7b7"}
                                  loading={uploadingRamzanSlider}
                                  size={12}
                                  aria-label="Loading Spinner"
                                  data-testid="loader"
                                />
                                <p className="text-teal-500 text-sm">
                                  uploading Images ...
                                </p>
                              </div>
                            )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Title
                      </label>
                      <div className="">
                        <input
                          id="middleSchoolTitle"
                          name="middleSchoolTitle"
                          onChange={middleSchoolChangeHandler}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Key Stages
                      </label>
                      <div className="">
                        <input
                          id="middleSchooKeyStages"
                          name="middleSchooKeyStages"
                          onChange={middleSchoolChangeHandler}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Years | Ages
                      </label>
                      <div className="">
                        <input
                          id="middleSchooYearsAges"
                          name="middleSchooYearsAges"
                          onChange={middleSchoolChangeHandler}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Why Choose Almadinah */}
          <form onSubmit={submitHandlerWhyChooseALmadinah}>
            {mainSection === "Main Page" && (
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex gap-2 justify-center py-3 items-center">
                  <span className="bg-teal-500 h-[2px] w-80"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Why Choose Al-Mdinah
                  </h3>

                  <span className="bg-teal-500 h-[2px] w-80"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="">
                    <label
                      htmlFor="ramazan-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Add Two Photos
                    </label>

                    <div className="grid grid-cols-2 gap-2 rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                      <div className="flex flex-col">
                        <p>Left</p>
                        <div className="text-center border border-gray-900/25 py-5 px-3">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="leftImg"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="leftImg"
                                name="leftImg"
                                type="file"
                                onChange={whChooseImageLeftMainPageHandler}
                                multiple
                                className="sr-only"
                              />
                            </label>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF
                            </p>
                            {/* {!uploadingRamzanSlider ? (
                                <>
                                  <p className="text-xs leading-5 text-gray-600">
                                    PNG, JPG, GIF
                                  </p>
                                </>
                              ) : (
                                <div className="flex flex-wrap gap-5">
                                  <PropagateLoader
                                    color={"#36d7b7"}
                                    loading={uploadingRamzanSlider}
                                    size={12}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                  />
                                  <p className="text-teal-500 text-sm">
                                    uploading Images ...
                                  </p>
                                </div>
                              )} */}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p>Right</p>
                        <div className="text-center border border-gray-900/25 py-5 px-3 ">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="rightImg"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="rightImg"
                                name="rightImg"
                                type="file"
                                onChange={whChooseImageRightMainPageHandler}
                                multiple
                                className="sr-only"
                              />
                            </label>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Title
                      </label>
                      <div className="">
                        <input
                          id="whyChooseTitle"
                          name="whyChooseTitle"
                          onChange={whyChooseChangeHandler}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="whyChooseDescription"
                          name="whyChooseDescription"
                          onChange={whyChooseChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* School System Features */}
          <form onSubmit={submitHandlerSchoolSystemFeatures}>
            {mainSection == "Main Page" ? (
              <>
                <div className="flex gap-2 justify-center py-3 mt-5 items-center">
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Al-Madinah School System Features
                  </h3>
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        1
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="schoolFeatrueTitle1"
                            name="schoolFeatrueTitle1"
                            onChange={schoolFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="schoolFeatureDescription1"
                            name="schoolFeatureDescription1"
                            onChange={schoolFeatureChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          2
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="schoolFeatureTitle2"
                            name="schoolFeatureTitle2"
                            onChange={schoolFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="shoolFeatureDescription2"
                          name="schoolFeatureDescription2"
                          onChange={schoolFeatureChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        3
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="schoolFeatureTitle3"
                            name="schollFeatureTitle3"
                            onChange={schoolFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="schoolFeatureDescription3"
                            name="schoolFeatureDescription3"
                            onChange={schoolFeatureChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          4
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="schoolFeatureTitle4"
                            name="schoolFeatureTitle4"
                            onChange={schoolFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="schoolFeatureDescription4"
                          name="schoolFeatureDescription4"
                          onChange={schoolFeatureChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          5
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="schoolFeatureTitle5"
                            name="schoolFeatureTitle5"
                            onChange={schoolFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="schoolFeatureDescription5"
                          name="schoolFeatureDescription5"
                          onChange={schoolFeatureChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          6
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="schoolFeatureTitle6"
                            name="schoolFeatureTitle6"
                            onChange={schoolFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="schoolFeatureDescription6"
                          name="schoolFeatureDescription6"
                          onChange={schoolFeatureChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          7
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="schoolFeatureTitle7"
                            name="schoolFeatureTitle7"
                            onChange={schoolFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="shoolFeatureDescription7"
                          name="schoolFeatureDescription7"
                          onChange={schoolFeatureChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}{" "}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Learn teach Features */}
          <form onSubmit={submitHandlerLearnTeachFeatures}>
            {mainSection == "Main Page" ? (
              <>
                <div className="flex gap-2 justify-center py-3 mt-5 items-center">
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Teach / Learn Features:
                  </h3>
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                </div>
                <div className="">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Heading
                  </label>
                  <div className="">
                    <input
                      id="teachLearnFeatureMainHeading"
                      name="teachLearnFeatureMainHeading"
                      onChange={teachLearnFeatureChangeHandler}
                      className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        1
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Sub-Heading
                        </label>
                        <div className="">
                          <input
                            id="teachLearnFeatureMainHeading1"
                            name="teachLearnFeatureMainHeading1"
                            onChange={teachLearnFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          2
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Sub-Heading
                        </label>
                        <div className="">
                          <input
                            id="teachLearnFeatureMainHeading2"
                            name="teachLearnFeatureMainHeading2"
                            onChange={teachLearnFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        3
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Sub-Heading
                        </label>
                        <div className="">
                          <input
                            id="teachLearnFeatureMainHeading3"
                            name="teachLearnFeatureMainHeading3"
                            onChange={teachLearnFeatureChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}{" "}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Learning Journey */}
          <form onSubmit={submitHandlerLearningJourney}>
            {mainSection === "Main Page" && (
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex gap-2 justify-center py-3 items-center">
                  <span className="bg-teal-500 h-[2px] w-80"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Learning Journey
                  </h3>

                  <span className="bg-teal-500 h-[2px] w-80"></span>
                </div>

                <div className="">
                  <label
                    htmlFor="ramazan-slider"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Add Photos
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                    <div className="flex flex-col">
                      <p>1</p>
                      <div className="text-center border border-gray-900/25 py-5 px-3">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="firstLearningImage"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="firstLearningImage"
                              name="firstLearningImage"
                              type="file"
                              onChange={firstImageLearningMainPageHandler}
                              multiple
                              className="sr-only"
                            />
                          </label>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p>2</p>
                      <div className="text-center border border-gray-900/25 py-5 px-3 ">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="secondLearningImage"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="secondLearningImage"
                              name="secondLearningImage"
                              type="file"
                              onChange={secondImageLearningMainPageHandler}
                              multiple
                              className="sr-only"
                            />
                          </label>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p>3</p>
                      <div className="text-center border border-gray-900/25 py-5 px-3">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="thirdLearningImage"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="thirdLearningImage"
                              name="thirdLearningImage"
                              type="file"
                              onChange={thirdImageLearningMainPageHandler}
                              multiple
                              className="sr-only"
                            />
                          </label>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p>4</p>
                      <div className="text-center border border-gray-900/25 py-5 px-3 ">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="fourthLearningImage"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="fourthLearningImage"
                              name="fourthLearningImage"
                              type="file"
                              onChange={fourthImageLearningMainPageHandler}
                              multiple
                              className="sr-only"
                            />
                          </label>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Teaching Methodology */}
          <form onSubmit={submitHandlerTeachingMethodology}>
            {mainSection == "Main Page" ? (
              <>
                <div className="flex gap-2 justify-center py-3 mt-5 items-center">
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Teaching Methodology
                  </h3>
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                </div>
                <div className="flex flex-col gap-16">
                  <div className="">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Sidebar Contents
                    </label>
                    <div className="">
                      <input
                        id="teachingMethodologySidebarContent"
                        name="teachingMethodologySidebarContent"
                        onChange={teachingMethodologyChangeHandler}
                        className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Live Timetabled Content
                    </label>
                    <div className="">
                      <input
                        id="teachingMethodologyLiveTimeAbledHeading"
                        name="teachingMethodologyLiveTimeAbledHeading"
                        onChange={teachingMethodologyChangeHandler}
                        className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        1
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="teachingMethodologyTitle1"
                            name="teachingMethodologyTitle1"
                            onChange={teachingMethodologyChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="teachingMethodologyDescription1"
                            name="teachingMethodologyDescription1"
                            onChange={teachingMethodologyChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          2
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="teachingMethodologyTitle2"
                            name="teachingMethodologyTitle2"
                            onChange={teachingMethodologyChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="teachingMethodologyDescription2"
                          name="teachingMethodologyDescription2"
                          onChange={teachingMethodologyChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        3
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="teachingMethodologyTitle3"
                            name="teachingMethodologyTitle3"
                            onChange={teachingMethodologyChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="teachingMethodologyDescription3"
                            name="teachingMethodologyDescription3"
                            onChange={teachingMethodologyChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          4
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="teachingMethodologyTitle4"
                            name="teachingMethodologyTitle4"
                            onChange={teachingMethodologyChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="teachingMethodologyDescription4"
                          name="teachingMethodologyDescription4"
                          onChange={teachingMethodologyChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}{" "}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Footer Section */}
          <form onSubmit={submitHandlerFooterSection}>
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="main-banner-slider"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add Footer Section Slider Images
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="main-footer-slider"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="main-footer-slider"
                          name="main-footer-slider"
                          type="file"
                          onChange={footerImageMainPageHandler}
                          multiple
                          className="sr-only"
                        />
                      </label>
                      {!uploadingFooterSectionImages ? (
                        <>
                          <p className="pl-1">or drag and drop</p>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingFooterSectionImages}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500">uploading Images ...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
        </div>
      ) : mainSection === "About Us" ? (
        <div>
          {/* Mission Section */}
          <form onSubmit={submitHandlerMissionSection}>
            <div>
              <div className="flex gap-2 justify-center py-3 items-center">
                <span className="bg-teal-500 h-[2px] w-80"></span>
                <h3 className="text-xl py-1 px-2 rounded border-2 border-teal-500">
                  Mission Statement
                </h3>
                <span className="bg-teal-500 h-[2px] w-80"></span>
              </div>
              <div className="grid grid-cols-2 items-center md:grid-cols-4 gap-4">
                <div className="">
                  <label
                    htmlFor="main-banner-slider"
                    className="block text-sm font-medium  text-gray-900"
                  >
                    Add Image
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-3 py-3">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="mission-image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="mission-image"
                            name="mission-image"
                            type="file"
                            onChange={missionAboutUsImageHandler}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <label
                    htmlFor="missionContents"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contents:
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="missionContents"
                      name="missionContents"
                      value={missionContents}
                      onChange={(e: any) => setMissionContents(e.target.value)}
                      rows={4}
                      className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Vission Section */}
          <form onSubmit={submitHandlerVissionSection}>
            <div>
              <div className="flex gap-2 justify-center py-3 items-center">
                <span className="bg-teal-500 h-[2px] w-80"></span>
                <h3 className="text-xl py-1 px-2 rounded border-2 border-teal-500">
                  Vission Statement
                </h3>
                <span className="bg-teal-500 h-[2px] w-80"></span>
              </div>
              <div className="grid grid-cols-2 items-center md:grid-cols-4 gap-4">
                <div className="">
                  <label
                    htmlFor="main-banner-slider"
                    className="block text-sm font-medium  text-gray-900"
                  >
                    Add Image
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-3 py-3">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="vission-image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="vission-image"
                            name="vission-image"
                            type="file"
                            onChange={vissionAboutUsImageHandler}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <label
                    htmlFor="vissionContents"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contents:
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="vissionContents"
                      name="vissionContents"
                      value={vissionContents}
                      onChange={(e: any) => setVissionContents(e.target.value)}
                      rows={4}
                      className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Value Section */}
          <form onSubmit={submitHandlerValueSection}>
            <div>
              <div className="flex gap-2 justify-center py-3 items-center">
                <span className="bg-teal-500 h-[2px] w-80"></span>
                <h3 className="text-xl py-1 px-2 rounded border-2 border-teal-500">
                  Value Statement
                </h3>
                <span className="bg-teal-500 h-[2px] w-80"></span>
              </div>
              <div className="grid grid-cols-2 items-center md:grid-cols-4 gap-4">
                <div className="">
                  <label
                    htmlFor="main-banner-slider"
                    className="block text-sm font-medium  text-gray-900"
                  >
                    Add Image
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-3 py-3">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="value-image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="value-image"
                            name="value-image"
                            type="file"
                            onChange={valueAboutUsImageHandler}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <label
                    htmlFor="valueContents"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contents:
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="valueContents"
                      name="valueContents"
                      value={valueContents}
                      onChange={(e: any) => setValueContents(e.target.value)}
                      rows={4}
                      className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
        </div>
      ) : mainSection === "How We Teach" ? (
        <div>
          {/* Extracurricular Enrichment */}
          <form onSubmit={submitHandlerExtracurricularEnrichment}>
            {mainSection == "How We Teach" ? (
              <>
                <div className="flex gap-2 justify-center py-3 mt-5 items-center">
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Extracurricular Enrichment
                  </h3>
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                </div>
                <div className="flex flex-col gap-16">
                  <div className="">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Main Contents
                    </label>
                    <div className="">
                      <input
                        id="extracurricularEnrichmentSidebarContent"
                        name="extracurricularEnrichmentSidebarContent"
                        onChange={extracurricularEnrichmentChangeHandler}
                        className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        1
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="extracurricularEnrichmentTitle1"
                            name="extracurricularEnrichmentTitle1"
                            onChange={extracurricularEnrichmentChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="extracurricularEnrichmentDescription1"
                            name="extracurricularEnrichmentDescription1"
                            onChange={extracurricularEnrichmentChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          2
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="extracurricularEnrichmentTitle2"
                            name="extracurricularEnrichmentTitle2"
                            onChange={extracurricularEnrichmentChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="extracurricularEnrichmentDescription2"
                          name="extracurricularEnrichmentDescription2"
                          onChange={extracurricularEnrichmentChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        3
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="extracurricularEnrichmentTitle3"
                            name="extracurricularEnrichmentTitle3"
                            onChange={extracurricularEnrichmentChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="extracurricularEnrichmentDescription3"
                            name="extracurricularEnrichmentDescription3"
                            onChange={extracurricularEnrichmentChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}{" "}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
          {/* Assessment Evaluation */}
          <form onSubmit={submitHandlerAssessmentEvaluation}>
            {mainSection == "How We Teach" ? (
              <>
                <div className="flex gap-2 justify-center py-3 mt-5 items-center">
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                  <h3 className="text-xl  py-1 px-2 rounded border-2 border-teal-500">
                    Assessment Evaluation
                  </h3>
                  <span className="bg-teal-500 h-[2px] w-60"></span>
                </div>
                <div className="flex flex-col gap-16">
                  <div className="">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Main Contents
                    </label>
                    <div className="">
                      <input
                        id="assessmentEvaluationSidebarContent"
                        name="assessmentEvaluationSidebarContent"
                        onChange={assessmentEvaluationChangeHandler}
                        className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        1
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="assessmentEvaluationTitle1"
                            name="assessmentEvaluationTitle1"
                            onChange={assessmentEvaluationChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="assessmentEvaluationDescription1"
                            name="assessmentEvaluationDescription1"
                            onChange={assessmentEvaluationChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                          2
                        </p>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="assessmentEvaluationTitle2"
                            name="assessmentEvaluationTitle2"
                            onChange={assessmentEvaluationChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="">
                        <textarea
                          id="assessmentEvaluationDescription2"
                          name="assessmentEvaluationDescription2"
                          onChange={assessmentEvaluationChangeHandler}
                          rows={4}
                          className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <p className="border-2 border-teal-500 p-2 flex justify-center items-center w-12 mb-2  rounded-full">
                        3
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="">
                          <input
                            id="assessmentEvaluationTitle3"
                            name="assessmentEvaluationTitle3"
                            onChange={assessmentEvaluationChangeHandler}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="">
                          <textarea
                            id="assessmentEvaluationDescription3"
                            name="assessmentEvaluationDescription3"
                            onChange={assessmentEvaluationChangeHandler}
                            rows={4}
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}{" "}
            {midSection !== "Hide Page" && (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {mainSection !== "New Page" ? "Update" : "Create"}
                </button>
              </div>
            )}
          </form>
        </div>
      ) : null}
    </div>
  );
}
