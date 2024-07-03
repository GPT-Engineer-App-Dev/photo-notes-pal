import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const dummyNotes = [
  {
    id: 1,
    title: "Note 1",
    description: "This is the first note",
    photo: "/placeholder.svg?w-400&h-400",
  },
  {
    id: 2,
    title: "Note 2",
    description: "This is the second note",
    photo: "/placeholder.svg?w-400&h-400",
  },
];

const CreateEditNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const note = dummyNotes.find((note) => note.id === parseInt(id)) || {
    title: "",
    description: "",
    photo: "",
  };

  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [photo, setPhoto] = useState(note.photo);

  const handleSave = () => {
    // Save logic here
    navigate("/notes");
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">{isEdit ? "Edit Note" : "Create Note"}</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="photo" className="block text-sm font-medium">
            Photo URL
          </label>
          <Input
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button type="button" onClick={handleSave}>
            Save
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate("/notes")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditNotePage;