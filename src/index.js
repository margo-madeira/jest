export function showHealth(user) {
  let result;
  if (user.health < 15) {
    return (result = "critical");
  }
  if (50 >= user.health && user.health >= 15) {
    return (result = "wounded");
  }

  return (result = "healthy");
}
