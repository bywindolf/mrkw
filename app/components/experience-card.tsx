import React from "react";
import { CardProps } from "@/common/types";
import { format } from "date-fns"; // Optional: for better date formatting

export default function ExperienceCard({ item, className }: CardProps) {
  // Log the entire item for debugging to ensure correct data is passed
  console.log("Item data:", item);

  // Extract the start and end fields
  const start = item.start; // Firestore Timestamp
  const end = item.end; // Firestore Timestamp

  // Initialize Date objects for start and end
  let startDate: Date | null = null;
  let endDate: Date | null = null;

  // Handle start date parsing
  if (start && start._seconds) {
    startDate = new Date(start._seconds * 1000); // Convert Firestore Timestamp (_seconds to milliseconds)
  } else if (typeof start === "string") {
    startDate = new Date(start); // If start is a string, create a Date object
  }

  // Handle end date parsing
  if (end && end._seconds) {
    endDate = new Date(end._seconds * 1000); // Convert Firestore Timestamp (_seconds to milliseconds)
  } else if (typeof end === "string") {
    endDate = new Date(end); // If end is a string, create a Date object
  }

  // Log the parsed date objects for debugging
  console.log("Parsed start date:", startDate);
  console.log("Parsed end date:", endDate);

  // Format the dates if they are valid
  const formattedStart = startDate
    ? format(startDate, "MMMM yyyy")
    : "No start date";
  const formattedEnd = endDate ? format(endDate, "MMMM yyyy") : "No end date";

  return (
    <>
      {/* Conditional rendering to display the data */}
      {"role" in item && <h4 className="experience__role">{item.role}</h4>}
      {"company" in item && (
        <h4 className="experience__company">{item.company}</h4>
      )}
      {/* If description exists, render it as HTML */}
      {"description" in item && item.description && (
        <div
          className="experience__description"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      )}

      {("start" in item && startDate) || ("end" in item && endDate) ? (
        <div className="experience__dates">
          {"start" in item && startDate && (
            <p>{`Start Date: ${formattedStart}`}</p>
          )}
          {"end" in item && endDate && <p>{`End Date: ${formattedEnd}`}</p>}
        </div>
      ) : null}
    </>
  );
}
