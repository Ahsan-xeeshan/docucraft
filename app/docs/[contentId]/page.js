import ContentDisplay from "@/components/ContentDisplay";

const contentPage = ({ params: { contentId } }) => {
  return <ContentDisplay id={contentId} />;
};

export default contentPage;
