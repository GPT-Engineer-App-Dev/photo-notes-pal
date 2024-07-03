import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyNotes = [
  {
    id: 1,
    title: "Note 1",
    description: "This is the first note",
    photo: "/placeholder.svg?w-100&h-100",
  },
  {
    id: 2,
    title: "Note 2",
    description: "This is the second note",
    photo: "/placeholder.svg?w-100&h-100",
  },
];

const NotesPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Notes</h1>
        <Button as={Link} to="/notes/new">
          Create Note
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyNotes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{note.description}</p>
              <img
                src={note.photo}
                alt="placeholder"
                className="mx-auto rounded-xl object-cover w-full h-[100px]"
              />
              <Button as={Link} to={`/notes/${note.id}`} className="mt-2">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;