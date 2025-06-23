"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [subject, setSubject] = useState("noSubject");

  useEffect(() => {
    var newUrl = "";
    console.log(subject);
    if (subject === "noSubject") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }

    router.push(newUrl, { scroll: false });
  }, [subject, router, searchParams]);

  return (
    // <div
    // className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
    <Select
      onValueChange={(value) => setSubject(value)}
      value={subject}
      defaultValue={subject}
    >
      <SelectTrigger className="w-[180px] input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem key={"noSubject"} value={"noSubject"}>
          No Subject
        </SelectItem>
        {subjects.map((subject: string) => (
          <SelectItem className="capitalize" key={subject} value={subject}>
            {/* {subject.charAt(0).toUpperCase() + subject.slice(1)} */}
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
