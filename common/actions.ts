export const fetchDevProfile = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/dev-profile.json`
  );
  if (!response.ok) throw new Error("Failed to fetch dev profile");
  const data = await response.json();
  return data;
};
