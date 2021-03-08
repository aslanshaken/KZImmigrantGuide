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

puts "#{User.count} users created"

GetEmployee.create!(
    job_name: 'CDL Drivers',
    category:'drivers', 
    description:'Non-emergency medical transportation - Transporting clients to and from medical appointments/ Dialysis.', 
    city: 'New-York',
    cellphone: 3475769090,
    email: 'cdldriversnyc@yahoo.com'
    user: @aslan
)
GetEmployee.create!(
    job_name: 'Logistic Drivers',
    category:'drivers', 
    description:'Ability to work in a fast-paced environment Strong attention to detail Problem solving & decision making skills One year of experience in logistics driving.', 
    city: 'New-York',
    cellphone: 9175486029,
    email: 'logisticsinnyc@gmail.com'
    user: @bob
)GetEmployee.create!(
    job_name: 'Experienced NYC Server wanted',
    category:'restaurant', 
    description:'Must be able to work nights, weekends & holidays. Food and wine knowledge required. Great opportunity for the right person. Looking to set up interviews A.S.A.P.', 
    city: 'New-York',
    cellphone: 8523697952,
    email: 'waiteratflatiron@mail.com'
    user: @aslan
)GetEmployee.create!(
    job_name: 'FANTASTIC Restaurant MANAGER',
    category:'restaurant', 
    description:'Please have 2 years experience in fine dining management.Familiarity with French American cuisine and wine is helpful.Proficiency with POS a must.', 
    city: 'New-York',
    cellphone: 3475829436,
    email: 'twentyfivenyc@outlook.com'
    user: @bob
)GetEmployee.create!(
    job_name: 'CDL Drivers',
    category:'drivers', 
    description:'Non-emergency medical transportation - Transporting clients to and from medical appointments/ Dialysis.', 
    city: 'New-York',
    cellphone: 3475769090,
    email: 'cdldriversnyc@yahoo.com'
    user: @aslan
)