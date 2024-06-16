import V3Wrapper from "@/components/shared/v3Wrapper";

export default function MyExperience() {
  return (
    <V3Wrapper>
      <div className="grid md:grid-cols-2 gap-4">
        {Array.from({
          length: 4,
        }).map((item, index) => (
          <SimpleCard key={index} />
        ))}
      </div>
    </V3Wrapper>
  );
}

const SimpleCard = () => {
  return <div className="border rounded-xl p-4">Faizan</div>;
};
