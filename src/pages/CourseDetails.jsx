import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Course Details 🎓</h1>
      <p>Course ID: {id}</p>

      <h2>ChatGPT Mastery</h2>
      <p>This course will teach you AI from basics to advanced.</p>

      <button>Buy Now 💰</button>
    </div>
  );
}