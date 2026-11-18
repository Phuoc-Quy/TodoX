import React from "react";
import axios from "axios";
import { toast } from "sonner";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import api from "@/lib/axios";

const AddTask = ({ handleTaskAdded }) => {
  const [newTaskTile, setNewTaskTitle] = React.useState("");

  const addTask = async () => {
    if (newTaskTile.trim()) {
      try {
        await api.post("tasks", {
          title: newTaskTile,
        });
        toast.success(`Task ${newTaskTile} added successfully!`);
        handleTaskAdded();
      } catch (error) {
        console.error("Error adding task", error);
        toast.error("Failed to add task. Please try again later.");
      }
      setNewTaskTitle("");
    } else {
      toast.error("Task title cannot be empty.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Add a new task..."
          className="h-12 text-base bg-slate-50 sm:flex border-border/50 focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTile}
          onChange={(event) => setNewTaskTitle(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="gradient"
          size="xl"
          className="px-6"
          onClick={addTask}
          disabled={!newTaskTile.trim()}
        >
          <Plus className="size-5" />
          Add
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
