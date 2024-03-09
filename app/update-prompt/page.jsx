// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Suspense } from "react";

// import Form from "@components/Form";

// const UpdatePrompt = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const promptId = searchParams.get("id");

//   const [post, setPost] = useState({ prompt: "", tag: "" });
//   const [submitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const getPromptDetails = async () => {
//       const response = await fetch(`/api/prompt/${promptId}`);
//       const data = await response.json();

//       setPost({
//         prompt: data.prompt,
//         tag: data.tag,
//       });
//     };

//     if (promptId) getPromptDetails();
//   }, [promptId]);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!promptId) return alert("Missing PromptId!");

//     try {
//       const response = await fetch(`/api/prompt/${promptId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//       });

//       if (response.ok) {
//         router.push("/");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Form
//       type="Edit"
//       post={post}
//       setPost={setPost}
//       submitting={submitting}
//       handleSubmit={updatePrompt}
//     />
//   );
// };

// export default UpdatePrompt;

// ******************************* Chat GPT Code ***********************************

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Removed useSearchParams import
// import { Suspense } from "react";

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const [promptId, setPromptId] = useState(null); // Initialize promptId with null
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   // Inside a suspense boundary to handle loading state
  //   return (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       const searchParams = new URLSearchParams(window.location.search); const
  //       id = searchParams.get("id"); if (id) setPromptId(id);
  //     </Suspense>
  //   );
  // }, []);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert("Missing PromptId!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
