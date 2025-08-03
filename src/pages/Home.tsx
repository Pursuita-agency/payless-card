import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Star, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Download,
  Gift,
  TrendingUp,
  UserCheck,
  Zap,
  Percent,
  Award,
  Heart,
  Target,
  Compass,
  Ticket,
  CreditCard,
  Hotel,
  Plane,
  FileText,
  Building,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import AnimationWrapper from '../components/AnimationWrapper';
import PaylessCard from '../components/PaylessCard';

const Home: React.FC = () => {
  const [showAllVouchers, setShowAllVouchers] = React.useState(false);

  const destinations = [
    {
      name: 'North Coast',
      description: 'Pristine beaches and luxury resorts',
      discount: '20%',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '3000',
      discountedPrice: '2400'
    },
    {
      name: 'Sharm El Sheikh',
      description: 'World-class diving and coral reefs',
      discount: '18%',
      image: 'https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2500',
      discountedPrice: '2050'
    },
    {
      name: 'El Gouna',
      description: 'Modern lagoon town paradise',
      discount: '15%',
      image: 'https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2800',
      discountedPrice: '2380'
    },
    {
      name: 'Dahab',
      description: 'Bohemian vibe and Blue Hole',
      discount: '12%',
      image: 'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2000',
      discountedPrice: '1760'
    },
    {
      name: 'Luxor',
      description: 'Ancient temples and royal tombs',
      discount: '10%',
      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '1800',
      discountedPrice: '1620'
    },
    {
      name: 'Aswan',
      description: 'Nubian culture and Nile cruises',
      discount: '8%',
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2200',
      discountedPrice: '2024'
    }
  ];

  const whyPaylessReasons = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Unbeatable Discounts',
      description: 'Save up to 20% on your entire trip - hotels, dining, activities, and more across Egypt',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Verified Partners',
      description: 'Over 500 trusted partners across Egypt\'s top destinations with guaranteed savings',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Activation',
      description: 'Get your digital card within 24 hours and start saving immediately on your travels',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Exclusive Access',
      description: 'Member-only deals, special experiences, and VIP treatment at premium locations',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const services = [
    {
      title: 'Hotels',
      description: 'Payless provides a discount of up to 20% on your hotel stay across Egypt\'s finest accommodations.',
      icon: <Hotel className="h-12 w-12" />,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Flight Tickets',
      description: 'Take advantage of discounts of up to 10% on flight tickets for domestic and international travel.',
      icon: <Plane className="h-12 w-12" />,
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-sky-500 to-sky-600'
    },
    {
      title: 'Visa',
      description: 'We are here to assist you in securing a visa for any country with streamlined processing and competitive rates.',
      icon: <FileText className="h-12 w-12" />,
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Umrah',
      description: 'At Payless, we have designed the finest Umrah programs with comprehensive packages and spiritual guidance.',
      icon: <Building className="h-12 w-12" />,
      image: 'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const vouchers = [
    'Free night on Nile Cruise (3+ nights)',
    '30% off Nile dinner for 2',
    '14-night Umrah for cost of 11',
    'Visa waived if booking 6+ nights outside Egypt',
    'Premium business visa at discounted rate',
    'Free airport transfer with hotel booking',
    'Complimentary spa session with resort stay',
    '25% off adventure tours and excursions',
    'Free breakfast upgrade at partner hotels',
    'Discounted car rental for 7+ days',
    'Priority check-in at all partner locations',
    'Free Wi-Fi upgrade in hotel rooms'
  ];

  const displayedVouchers = showAllVouchers ? vouchers : vouchers.slice(0, 6);

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      location: 'Cairo',
      text: 'Saved over 1500 EGP on my North Coast vacation! This card is absolutely amazing.',
      rating: 5,
      savings: '1500 EGP'
    },
    {
      name: 'Mohamed Hassan',
      location: 'Alexandria',
      text: 'Perfect for weekend getaways. The discounts are real and substantial every time.',
      rating: 5,
      savings: '1200 EGP'
    },
    {
      name: 'Nour El-Din',
      location: 'Giza',
      text: 'Best travel investment I\'ve ever made. Highly recommended for all Egypt travelers!',
      rating: 5,
      savings: '2000 EGP'
    }
  ];

  const faqItems = [
    {
      question: 'How does the Payless card work?',
      answer: 'Simply present your Payless card at any of our 500+ partner locations across Egypt to receive instant discounts on hotels, dining, activities, and more.'
    },
    {
      question: 'How long does it take to get my card?',
      answer: 'Your digital Payless card will be activated within 24 hours of registration. You\'ll receive it via email and can start using it immediately.'
    },
    {
      question: 'What destinations are covered?',
      answer: 'Payless covers all major Egyptian destinations including North Coast, Sharm El Sheikh, Hurghada, Luxor, Aswan, Cairo, Alexandria, and many more.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! The Payless card has a transparent pricing structure with no additional charges for using your discounts.'
    },
    {
      question: 'Can I use the card for group bookings?',
      answer: 'Yes! The Payless card works for individual travelers and groups. The more you travel, the more you save.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up border border-orange-300/30">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Egypt's #1 Travel Discount Card</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
                Wherever You Want to
                <span className="block bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Travel in Egypt...
                </span>
                <span className="block text-3xl md:text-4xl mt-2 font-manrope">
                  Our Card Gives You an 
                  <span className="text-orange-300"> Unbeatable Discount</span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl animate-fade-in-up stagger-2 font-manrope">
                From the pristine beaches of the North Coast to the ancient wonders of Luxor - 
                save up to 20% on hotels, dining, and experiences everywhere in Egypt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up stagger-3">
                <Link
                  to="/get-card"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center space-x-2 animate-pulse-slow"
                >
                  <span>Unlock Your Discount</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="flex items-center space-x-2 text-blue-100">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span className="text-sm font-medium">Loved by 50,000+ travelers</span>
                </div>
              </div>
            </div>

            {/* Payless Card Display */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <PaylessCard size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Statement Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper animationType="scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <Target className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-manrope">
                "Wherever you want to travel in Egypt...
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-200 mb-6">
                our card gives you an unbeatable discount."
              </h3>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto font-manrope">
                This is our promise to you. No matter which Egyptian destination calls to your heart, 
                Payless ensures you experience it for less.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animationType="slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Us
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-6 font-manrope">
                  Discover the World with Payless...
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-manrope">
                  Payless card is your ultimate pass to incredible discounts of up to 50% on all your travel adventures! 
                  Whether you're envisioning luxurious hotels, thrilling cruises, or serene yacht retreats, 
                  Payless is your reliable companion for maximizing savings on every aspect of your journey!
                </p>
                <div className="mt-8">
                  <Link
                    to="/get-card"
                    className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
                  >
                    <span>Get Your Card</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animationType="slide-in-right">
              <div className="flex justify-center">
                <PaylessCard size="large" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
                Comprehensive travel solutions designed to make your journey seamless and affordable
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 200}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${service.color} text-white p-3 rounded-full shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-manrope">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vouchers Section */}
      <section id="vouchers" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vouchers
              </h2>
              <p className="text-2xl text-purple-600 font-semibold mb-4 font-manrope">
                Unlock exclusive vouchers that can save you over 20,000 EGP each year!
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-manrope">
                Discover amazing deals and exclusive offers available only to Payless cardholders
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedVouchers.map((voucher, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 100}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 border-l-4 border-purple-500 group">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                      <Gift className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium leading-relaxed font-manrope">
                        {voucher}
                      </p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="bg-purple-50 px-2 py-1 rounded-full">
                          <span className="text-xs text-purple-600 font-semibold">EXCLUSIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllVouchers(!showAllVouchers)}
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
            >
              <span>{showAllVouchers ? 'Show Less' : 'Show More'}</span>
              {showAllVouchers ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </section>
      {/* Why Choose Payless Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Payless?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
                More than just a discount card - it's your gateway to experiencing Egypt like never before
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyPaylessReasons.map((reason, index) => (
              <AnimationWrapper 
                key={index}
                animationType={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={index * 200}
              >
                <div className={`bg-gradient-to-br ${reason.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group`}>
                  <div className={`bg-gradient-to-r ${reason.color} text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-manrope">
                    {reason.description}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          {/* Payless Card Display - Benefits Section */}
          <AnimationWrapper animationType="scale-in">
            <div className="flex justify-center">
              <PaylessCard size="large" showAnimation={false} />
            </div>
          </AnimationWrapper>
        </div>
      </section>


      {/* Destinations Section - Enhanced Discount Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Exclusive Travel Deals
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
                Real savings at Egypt's most popular destinations. These aren't just discounts - they're your ticket to affordable luxury.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 150}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Enhanced Discount Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
                      <Ticket className="h-3 w-3 inline mr-1" />
                      {destination.discount} OFF
                    </div>
                    
                    {/* Enhanced Payless Mini Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center space-x-1 shadow-lg">
                      <CreditCard className="w-3 h-3 text-sky-600" />
                      <span className="text-xs font-bold text-gray-800">PAYLESS</span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {destination.name}
                      </h3>
                      <p className="text-white/90 text-sm font-manrope">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600 font-manrope">Egypt</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 line-through font-manrope">{destination.originalPrice} EGP</p>
                        <p className="text-2xl font-bold text-green-600">{destination.discountedPrice} EGP</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-sky-600 font-semibold">With Payless</p>
                        <p className="text-xs text-gray-500 font-manrope">Per night average</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real Savings, Real Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-manrope">
                See how much our travelers have saved with their Payless cards
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimationWrapper 
                key={index}
                animationType="slide-in-left"
                delay={index * 200}
              >
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-100 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                      Saved {testimonial.savings}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic text-lg font-manrope">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-manrope">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 font-manrope">
                Everything you need to know about your Payless card
              </p>
            </div>
          </AnimationWrapper>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 100}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-manrope">
                    {faq.answer}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animationType="slide-in-left">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start Your Journey with Payless?
                </h2>
                <p className="text-xl text-blue-100 mb-8 font-manrope">
                  Join thousands of smart travelers who've already discovered the power of Payless. 
                  Your Egyptian adventure awaits - for less!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Link
                    to="/get-card"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 animate-glow"
                  >
                    <Gift className="h-5 w-5" />
                    <span>Book Now and Save Big</span>
                  </Link>
                  
                  <div className="flex items-center space-x-4 text-blue-100">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-manrope">24-hour activation</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-manrope">No hidden fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Payless Card Display - CTA Section */}
            <AnimationWrapper animationType="slide-in-right">
              <div className="flex justify-center lg:justify-end">
                <PaylessCard size="large" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Final CTA Before Footer */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper animationType="scale-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
              <Compass className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Don't Miss Out on Egypt's Best Deals
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-manrope">
                Every day you wait is money you could be saving. Get your Payless card today!
              </p>
              <Link
                to="/get-card"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
              >
                <span>Start Your Journey with Payless</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;