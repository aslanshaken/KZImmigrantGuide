# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PostByEmployee.destroy_all
GetEmployee.destroy_all
PostHouse.destroy_all
User.destroy_all

@aslan = User.create!(username: "aslan", email:"aslan@gmail.com", password: "123456")
@bob = User.create!(username: "bob", email:"bob@gmail.com", password: "123456")
@alan = User.create!(username: "alan", email:"alan@gmail.com", password: "123456")
@john = User.create!(username: "john", email:"john@gmail.com", password: "123456")
@vanessa = User.create!(username: "vanessa", email:"vanessa@gmail.com", password: "123456")
@st = User.create!(username: "st", email:"st@mail.com", password: "123456")



GetEmployee.create!(
    job_name: 'CDL Drivers',
    category:'drivers', 
    description:'Non-emergency medical transportation - Transporting clients to and from medical appointments/ Dialysis.', 
    city: 'New-York',
    cellphone: 3475769090,
    email: 'cdldriversnyc@yahoo.com',
    user: @aslan
)
GetEmployee.create!(
    job_name: 'Logistic Drivers',
    category:'drivers', 
    description:'Ability to work in a fast-paced environment Strong attention to detail Problem solving & decision making skills One year of experience in logistics driving.', 
    city: 'New-York',
    cellphone: 9175486029,
    email: 'logisticsinnyc@gmail.com',
    user: @bob
)
GetEmployee.create!(
    job_name: 'Experienced NYC Server wanted',
    category:'restaurant', 
    description:'Must be able to work nights, weekends & holidays. Food and wine knowledge required. Great opportunity for the right person. Looking to set up interviews A.S.A.P.', 
    city: 'New-York',
    cellphone: 8523697952,
    email: 'waiteratflatiron@mail.com',
    user: @aslan
)
GetEmployee.create!(
    job_name: 'FANTASTIC Restaurant MANAGER',
    category:'restaurant', 
    description:'Please have 2 years experience in fine dining management.Familiarity with French American cuisine and wine is helpful.Proficiency with POS a must.', 
    city: 'New-Jersey',
    cellphone: 3475829436,
    email: 'twentyfivenj@outlook.com',
    user: @bob
)
GetEmployee.create!(
    job_name: 'Production assistant',
    category:'entertainment', 
    description:'Manhattan based film / tv production company seeking a production assistant . Must be driven , personable , general knowledge of the industry , willing to travel if necessary. ', 
    city: 'New-Jersey',
    cellphone: 9586395685,
    email: 'filmontheway@yahoo.com',
    user: @aslan
)
#==================================================================================
PostByEmployee.create!(
    name: 'Alan',
    about:'A software engineer with 2 years of experiance.', 
    category:'software engineer', 
    city: 'New-Jersey',
    cellphone: 9299289595,
    email: 'alannyc@gmail.com',
    user: @alan
)
PostByEmployee.create!(
    name: 'John',
    about:'FREELANCE Bookkeeper available P/T .', 
    category:'bookkeeper', 
    city: 'New-York',
    cellphone: 9284568565,
    email: 'johnbookkeeper@yahoo.com',
    user: @john
)
PostByEmployee.create!(
    name: 'Vanessa',
    about:'A babysitter/Nanny looking for work.', 
    category:'babysitter', 
    city: 'New-York',
    cellphone: 9347565896,
    email: 'vanessabb@gmail.com',
    user: @vanessa
)
PostByEmployee.create!(
    name: 'St',
    about:'I have over seventeen years of experience as a personal Driver.', 
    category:'driver', 
    city: 'New-York',
    cellphone: 3475966085,
    email: 'st90@mail.com',
    user: @st
)
#==================================================================================
PostHouse.create!(
    name: '1BR HIGH END BY A C TRAINS * LAUNDRY & ROOF * NO FEE',
    description:'Massive 1Br/1Ba high end apt with tons of space ,huge living room and Office/Baby Room in the apt ,tons of closet space ', 
    city: 'New-York',
    date_move_in: 05/02/2021, #??? integer 
    price: 2000, 
    cellphone: 3475966085,
    email: 'ghyb91@mail.com',
    user: @aslan
)
PostHouse.create!(
    name: 'Sun-filled railroad apt w/ bedroom + office/nursery AND outdoor patio',
    description:'Sun-filled 1.5-bedroom railroad apartment on 2nd floor of a three story, owner-occupied, brownstone in South Park Slope, featuring private 15 x 15 outdoor patio.', 
    city: 'New-Jersey',
    date_move_in: 04/02/2021, #??? integer 
    price: 1800, 
    cellphone: 3478589699,
    email: 'bob190@mail.com',
    user: @bob
)

#====================================================================================

puts "#{User.count} users created"
puts "#{GetEmployee.count} GetEmployee created"
puts "#{PostByEmployee.count} PostByEmployee created"
puts "#{PostHouse.count} houses created"