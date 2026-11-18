import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                Great job! You've completed {completedTasksCount} task
                {completedTasksCount !== 1 ? "s" : ""}.
                {activeTasksCount > 0 && (
                  <span>
                    {" "}
                    You still have {activeTasksCount} active task
                    {activeTasksCount !== 1 ? "s" : ""}.
                  </span>
                )}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>
                Let's get started! You have {activeTasksCount} active task
                {activeTasksCount !== 1 ? "s" : ""}.
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
