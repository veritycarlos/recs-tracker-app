# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

frodo = User.create({name: 'Frodo', password: 'frodo'})
sam = User.create({name: 'Sam', password: 'sam'})

travelDestinations = Category.create({name: 'Travel Destinations'})
elevenses = Category.create({name: 'Elevenses'})

apple = Recommendation.create(user_id: frodo.id, category_id: elevenses.id, year: 1990, info: 'snack')
mordor = Recommendation.create(user_id: frodo.id, category_id: travelDestinations.id, year: 3019, info: 'challenging adventure')
seedCake = Recommendation.create({user_id: sam.id, category_id: elevenses.id, year: 1990, info: 'minty  taste'})
shire = Recommendation.create(user_id: sam.id, category_id: travelDestinations.id, year: 3025, info: 'home')

Note.create(recommendation_id: mordor.id, note: "This trip was not very fun")
Note.create(recommendation_id: seedCake.id, note: "This is my favorite bread")

