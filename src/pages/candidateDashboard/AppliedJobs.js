import React from "react";
import { useSelector } from "react-redux";
import { useGetAppliedJobQuery } from "../../app/features/job/jobApi";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobQuery(email);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-xl py-5">Applied jobs</h1>
      <div className="grid grid-cols-2 gap-5 pb-5">
        {data?.data?.map((job) => (
          <JobCard key={job._id} jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
