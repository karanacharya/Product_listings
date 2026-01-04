import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ListItem from "./components/ListItem";
import AddtaskFrom from "./components/AddtaskFrom";
import CompleteTask from "./components/CompleteTask";

const App = () => {
  //adding the task which i want to edit
  const [editingtask, setEditingtask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    const savedViewMode = localStorage.getItem("viewMode");
    return savedViewMode || "card";
  });

  const defaultTasks = [
    {
      id: 1,
      name: "Sample Product 1",
      price: 29.99,
      category: "Electronics",
      stock: 10,
    },
    {
      id: 2,
      name: "Sample Product 2",
      price: 49.99,
      category: "Clothing",
      stock: 5,
    },
    {
      id: 3,
      name: "Sample Product 3",
      price: 19.99,
      category: "Accessories",
      stock: 15,
    },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });

  function handleDelete(id) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      return updatedTasks;
    });
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <Header
            onAddclick={() => {
              setShowForm(true);
            }}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {showForm && (
            <AddtaskFrom
              setEditingtask={setEditingtask}
              editingtask={editingtask}
              setTasks={setTasks}
              setShowForm={setShowForm}
            />
          )}

          <section className="mt-8">
            {viewMode === "card" ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start auto-rows-min">
                {tasks.map((item) => (
                  <Card
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    stock={item.stock}
                    onDelete={() => handleDelete(item.id)}
                    onEdit={() => {
                      setEditingtask(item);
                      setShowForm(true);
                    }}
                  />
                ))}

                {tasks.length === 0 && (
                  <CompleteTask onAddclick={()=> setShowForm(true)}/>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {tasks.map((item) => (
                  <ListItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    stock={item.stock}
                    onDelete={() => handleDelete(item.id)}
                    onEdit={() => {
                      setEditingtask(item);
                      setShowForm(true);
                    }}
                  />
                ))}

                {tasks.length === 0 && (
                  <CompleteTask onAddclick={()=> setShowForm(true)}/>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
