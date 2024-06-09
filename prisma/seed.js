const db = require("../src/config/db");

async function main() {
  const user = await db.user.create({
    data: {
      email: "widi@example.com",
      password: "password",
      name: "Widi Diky",
      phone: "081234567890",
    },
  });

  const venue = await db.venue.create({
    data: {
      name: "Hotel Santika",
      address: "Jl. Jend. Sudirman No. 1, Jakarta",
    },
  });

  const sponsor1 = await db.sponsor.create({
    data: {
      name: "Surya Nusantara",
    },
  });

  const sponsor2 = await db.sponsor.create({
    data: {
      name: "Maju Terus",
    },
  });

  const event = await db.event.create({
    data: {
      name: "Gudang Garam Music Concert",
      description: "Music concert event sponsored by Gudang Garam",
      date: new Date("2024-02-10"),
      time: "19:00-22:00",
      venueId: venue.id,
      sponsorIds: {
        set: [sponsor1.id, sponsor2.id],
      },
      userIds: {
        set: [user.id],
      },
    },
  });

  const ticket1 = await db.ticket.create({
    data: {
      name: "Regular",
      price: 500000,
      eventId: event.id,
    },
  });

  const ticket2 = await db.ticket.create({
    data: {
      name: "VIP",
      price: 1000000,
      eventId: event.id,
    },
  });

  // Update event with ticketIds
  await db.event.update({
    where: { id: event.id },
    data: {
      ticketIds: {
        set: [ticket1.id, ticket2.id],
      },
    },
  });

  console.log(event);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
