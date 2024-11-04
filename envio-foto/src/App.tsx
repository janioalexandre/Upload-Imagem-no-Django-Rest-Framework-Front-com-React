
import { useForm } from 'react-hook-form';
import './App.css'
function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.file[0]);

    const res = await fetch("http://localhost:8000", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    console.log(JSON.stringify(`${res.message}, status: ${res.status}`));
  };
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />

        <input type="submit" />
      </form>
    </>
  )
}

export default App
