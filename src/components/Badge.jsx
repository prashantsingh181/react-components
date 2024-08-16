function Badge({ badgeText, backgroundColor })   {
  return (
    <div
      style={{ backgroundColor }}
      className="p-1.5 font-bold text-white text-sm shadow rounded-md"
    >
      {badgeText}
    </div>
  );
}

export default Badge;
