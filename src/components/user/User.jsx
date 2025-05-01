import { useEffect, useState } from "react";
import axios from "axios";

const User = ({id}) => {
  const [submitted, setSubmitted] = useState(true);
  const [user, setUser]=useState(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    resume: null,
  });
  const getUser=async()=>{
    const {data}=await axios.get(`https://m9zk8cje95.execute-api.us-east-2.amazonaws.com/prod/user?sub=${id}`)
    console.log(data);
    setUser(data)
    
  }
  useEffect(() => {
    // if (auth.isAuthenticated && auth.user) {
    //   getUser()
    getUser()
    // }
  }, []);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sent:", formData);
    setSubmitted(true);
  };
  // https://gf1vd6qttc.execute-api.us-east-2.amazonaws.com/v1/s3?key=hrgannonprojectbucket/cv_givenname_family_name.pdf
  const handleFileUpload = async () => {
    // const file = e.target.files[3];
    // const filename = encodeURIComponent(file.name);
    // const filetype = encodeURIComponent(file.type);
  
    // Step 1: Get presigned URL
    const res = await fetch(`https://gf1vd6qttc.execute-api.us-east-2.amazonaws.com/v1/s3?key=hrgannonprojectbucket/cv_givenname_family_name.pdf`);
    const { uploadURL } = await res.json();
  console.log(uploadURL);
  
    // Step 2: Upload file directly to S3 using PUT
    // await fetch(uploadURL, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': file.type,
    //   },
    //   body: file,
    // });
  
    alert('✅ File uploaded successfully');
  };
  

  return (
    <div className="user-page">
      <div className="background-lines"></div>
      <h2>Welcome to your Dashboard {user?.given_name}!</h2>
      <p>Here you can manage your profile, upload documents, and track your submissions.</p>
      <div className="user-wrapper">
        {!submitted ? (
          <form className="user-form" onSubmit={handleSubmit}>
            <h3>Application</h3>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              // required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Your family name"
              value={formData.lastName}
              onChange={handleChange}
              // required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              // required
            />
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              onChange={handleFileUpload}
              required
            />
                {/* <input type="file" onChange={handleFileUpload} /> */}

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="confirmation">
            <h3>Thank you {user?.given_name}! Your application has been successfully sent!</h3>
            <a href={`https://gf1vd6qttc.execute-api.us-east-2.amazonaws.com/v1/s3?key=hrgannonprojectbucket/${user?.cv}`}>cv</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;



// import { useEffect, useState } from "react";
// import axios from "axios";

// const User = ({ id }) => {
//   const [submitted, setSubmitted] = useState(true);
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     resume: null,
//   });

//   // Fetch user info (you can replace with real user logic if needed)
//   useEffect(() => {
//     setUser({ given_name: "Applicant" }); // dummy name
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "resume") {
//       setFormData({ ...formData, resume: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Step 1: Prepare file name
//     const { firstName, lastName, resume } = formData;
//     if (!resume) return alert("Please upload a resume file.");

//     const filename = `cv_${firstName}_${lastName}.pdf`;

//     // Step 2: Get presigned URL from your Lambda endpoint
//     try {
//       const response = await axios.get(
//         `https://gf1vd6qttc.execute-api.us-east-2.amazonaws.com/v1/s3?key=hrgannonprojectbucket/${filename}`
//       );
//       const { uploadURL } = response.data;
//       console.log("Presigned URL:", uploadURL);

//       // Step 3: Upload the file directly to S3
//       await fetch(uploadURL, {
//         method: "PUT",
//         headers: {
//           "Content-Type": resume.type,
//         },
//         body: resume,
//       });

//       alert("✅ File uploaded successfully");
//       setSubmitted(true);
//     } catch (error) {
//       console.error("❌ Upload failed:", error);
//       alert("Upload failed. Check console for details.");
//     }
//   };

//   return (
//     <div className="user-page">
//       <div className="background-lines"></div>
//       <h2>Welcome to your Dashboard {user?.given_name}!</h2>
//       <p>
//         Here you can manage your profile, upload documents, and track your
//         submissions.
//       </p>
//       <div className="user-wrapper">
//         {!submitted ? (
//           <form className="user-form" onSubmit={handleSubmit}>
//             <h3>Application</h3>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Your first name"
//               value={formData.firstName}
//               onChange={handleChange}
//               // required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Your family name"
//               value={formData.lastName}
//               onChange={handleChange}
//               // required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               // required
//             />
//             <input
//               type="file"
//               name="resume"
//               accept="application/pdf"
//               onChange={handleChange}
//               // required
//             />
//             <button type="submit">Submit</button>
//           </form>
//         ) : (
//           <div className="confirmation">
//             <h3>
//               Thank you {user?.given_name}! Your application has been
//               successfully sent!
//             </h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default User;
