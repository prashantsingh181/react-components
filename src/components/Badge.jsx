function Badge({ badgeText, backgroundColor })   {
  return (
    <div
      style={{ backgroundColor }}
      className="px-3 py-1 font-bold text-white text-sm shadow rounded-md"
    >
      {badgeText}
    </div>
  );
}

export default Badge;
