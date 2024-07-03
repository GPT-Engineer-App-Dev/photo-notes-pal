import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const NoteDetailsPage = () => {
  const { id } = useParams();
  const note = dummyNotes.find((note) => note.id === parseInt(id));

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{note.description}</p>
        <img
          src={note.photo}
          alt="placeholder"
          className="mx-auto rounded-xl object-cover w-full h-[400px]"
        />
        <Button as={Link} to={`/notes/${note.id}/edit`} className="mt-2">
          Edit Note
        </Button>
      </CardContent>
    </Card>
  );
};

export default NoteDetailsPage;