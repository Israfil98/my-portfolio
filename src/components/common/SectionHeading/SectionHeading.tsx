interface ISectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: ISectionHeadingProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-emerald-glow font-mono text-sm font-bold tracking-widest uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
