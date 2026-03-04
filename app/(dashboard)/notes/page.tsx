import Card from "@/components/Card";
import Header from "@/components/ui/Header";
import { CgNotes } from "react-icons/cg";

export default function Notes() {
    const labelBySubject = [
        "All","Maths","Science","History"
    ]
  return (
    <div className="px-3 py-1">
      <Header title="My Notes" subtitle="Manage and organize your study materials."/>

      <div className="flex mb-4 gap-3">
        {
            labelBySubject.map((item)=>(
                <div className="rounded-lg bg-white hover:bg-gray-200 py-1 px-3 shadow-sm font-medium" key={item}>{item}</div>
            ))
        }
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Card
          title="Calculus - Integration Techniques"
          description="Feb 25, 2026"
          Icon={CgNotes}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          label="Math"
          buttonText="Study"
        />
        <Card
          title="Calculus - Integration Techniques"
          description="Feb 25, 2026"
          Icon={CgNotes}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          label="Math"
          buttonText="Study"
        />
        <Card
          title="Calculus - Integration Techniques"
          description="Feb 25, 2026"
          Icon={CgNotes}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          label="Math"
          buttonText="Study"
        />
         <Card
          title="Calculus - Integration Techniques"
          description="Feb 25, 2026"
          Icon={CgNotes}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          label="Math"
          buttonText="Study"
        />
         <Card
          title="Calculus - Integration Techniques"
          description="Feb 25, 2026"
          Icon={CgNotes}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          label="Math"
          buttonText="Study"
        />
         <Card
          title="Calculus - Integration Techniques"
          description="Feb 25, 2026"
          Icon={CgNotes}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          sideText={"total"}
          label="Math"
          buttonText="Study"
        />
      </div>
    </div>
  );
}
