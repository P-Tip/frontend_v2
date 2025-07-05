const SearchNotFound = () => {
  return (
    <div className="bg-brand-surface rounded-3xl p-12 shadow-sm border border-brand-border text-center animate-fadeIn">
      <div className="mb-4">
        <span className="text-6xl">🔍</span>
      </div>
      <h3 className="text-xl font-bold text-brand-text-primary mb-2 leading-7">
        검색 결과가 없습니다
      </h3>
      <p className="text-brand-text-secondary font-medium">
        다른 키워드로 검색해보세요
      </p>
    </div>
  );
};

export default SearchNotFound;
