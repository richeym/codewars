export function generateChatRoomNames(users: string[]): string[] {
  const userNames = users.map(user => {
    const [firstName, lastName] = user
      .replace(
        /\w\S*/g,
        x => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()
      )
      .split(' ');

    return {firstName, lastName, abbrevLastName: lastName.charAt(0)};
  });

  const firstNameCounts: Record<string, number> = {};
  const abbreviatedNameCounts: Record<string, number> = {};

  userNames.forEach(userName => {
    if (
      Object.prototype.hasOwnProperty.call(firstNameCounts, userName.firstName)
    ) {
      firstNameCounts[userName.firstName]++;
    } else {
      firstNameCounts[userName.firstName] = 1;
    }

    const abbrev = `${userName.firstName} ${userName.abbrevLastName}`;
    if (Object.prototype.hasOwnProperty.call(abbreviatedNameCounts, abbrev)) {
      abbreviatedNameCounts[abbrev]++;
    } else {
      abbreviatedNameCounts[abbrev] = 1;
    }
  });

  const names = userNames.map(userName => {
    if (firstNameCounts[userName.firstName] === 1) {
      return userName.firstName;
    } else if (
      abbreviatedNameCounts[
        `${userName.firstName} ${userName.abbrevLastName}`
      ] === 1
    ) {
      return `${userName.firstName} ${userName.abbrevLastName}`;
    }

    return `${userName.firstName} ${userName.lastName}`;
  });

  return names.sort();
}
