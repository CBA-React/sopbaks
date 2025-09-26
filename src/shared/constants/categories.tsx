import AllIcon from 'public/icons/adsTableCategoryIcons/all.svg';
import ApparelIcon from 'public/icons/adsTableCategoryIcons/apparelAndFootwear.svg';
import ElectronicsIcon from 'public/icons/adsTableCategoryIcons/electronics.svg';
import FirearmsIcon from 'public/icons/adsTableCategoryIcons/firearms.svg';
import FitnessIcon from 'public/icons/adsTableCategoryIcons/fitnessItemsAndExercise.svg';
import FoodIcon from 'public/icons/adsTableCategoryIcons/foodBeverages.svg';
import HealthIcon from 'public/icons/adsTableCategoryIcons/healthAndPersonalCare.svg';
import HomeOfficeIcon from 'public/icons/adsTableCategoryIcons/homeOfficeFurniture.svg';
import HouseholdIcon from 'public/icons/adsTableCategoryIcons/householdItems.svg';
import KnivesIcon from 'public/icons/adsTableCategoryIcons/knives.svg';
import NutritionIcon from 'public/icons/adsTableCategoryIcons/nutritionAndWellness.svg';
import OtherIcon from 'public/icons/adsTableCategoryIcons/otherItems.svg';
import PetIcon from 'public/icons/adsTableCategoryIcons/petProducts.svg';
import ServiceIcon from 'public/icons/adsTableCategoryIcons/services.svg';
import SportIcon from 'public/icons/adsTableCategoryIcons/sportsAndOutdoor.svg';
import ToolIcon from 'public/icons/adsTableCategoryIcons/toolsAndLandscaping.svg';
import ToysIcon from 'public/icons/adsTableCategoryIcons/toysAndGames.svg';

export const categories = [
    {
        id: 'all',
        name: 'All',
        tooltip: 'Show all categories',
        icon: <AllIcon />,
    },
    {
        id: 'apparel',
        name: 'Apparel & Footwear',
        tooltip:
            'Everyday clothing, activewear, luxury fashion, jewelry, accessories, shoes, etc.',
        icon: <ApparelIcon />,
    },
    {
        id: 'electronics',
        name: 'Electronics',
        tooltip:
            'Smartphones, laptops, tablets, wearables, TVs, gaming consoles, etc',
        icon: <ElectronicsIcon />,
    },
    {
        id: 'firearms',
        name: 'Firearms',
        tooltip: 'Guns and ammunition',
        icon: <FirearmsIcon />,
    },
    {
        id: 'fitness',
        name: 'Fitness Items & Exercise',
        tooltip:
            'Resistance bands, free weights, fitness equipment, running, training, wearable devices for monitoring, gym memberships, etc.',
        icon: <FitnessIcon />,
    },
    {
        id: 'food',
        name: 'Food & Beverages',
        tooltip:
            'Grocery items, snacks, packaged foods, bottled drinks, alcohol, coffee, etc.',
        icon: <FoodIcon />,
    },
    {
        id: 'household',
        name: 'Household Items',
        tooltip:
            'Cleaning supplies, laundry detergents, plates, bowls, pans, forks and other kitchen essentials.',
        icon: <HouseholdIcon />,
    },
    {
        id: 'home-office',
        name: 'Home/Office & Furniture',
        tooltip:
            'Home décor, furniture, mattresses, pillows, office décor, appliances, security systems, etc.',
        icon: <HomeOfficeIcon />,
    },
    {
        id: 'health',
        name: 'Health & Personal Care',
        tooltip:
            'Skincare, cosmetics, haircare, oral care, over the counter medications, etc.',
        icon: <HealthIcon />,
    },
    {
        id: 'knives',
        name: 'Knives',
        tooltip: 'Hunting, utility, etc.',
        icon: <KnivesIcon />,
    },
    {
        id: 'nutrition',
        name: 'Nutrition & Wellness',
        tooltip: 'Supplements, minerals, protein powders, vitamins, etc.',
        icon: <NutritionIcon />,
    },
    {
        id: 'other',
        name: 'Other Items',
        tooltip: 'Digital products, hardware accessories, etc.',
        icon: <OtherIcon />,
    },
    {
        id: 'pet',
        name: 'Pet Products',
        tooltip: 'Food, treats, toys, grooming, pet health, etc.',
        icon: <PetIcon />,
    },
    {
        id: 'services',
        name: 'Services',
        tooltip:
            'Management, professional, crypto, insurance, animal breeder, investing, legal, influencer, consulting, lending, etc',
        icon: <ServiceIcon />,
    },
    {
        id: 'sports',
        name: 'Sports & Outdoor',
        tooltip:
            'Sporting goods, camping gear, bicycles, footballs, hiking, safety gear, etc.',
        icon: <SportIcon />,
    },
    {
        id: 'tools',
        name: 'Tools & Landscaping',
        tooltip:
            'Hammer, electric drill, measuring tape, shovels, rake, mowers, flashlights, etc.',
        icon: <ToolIcon />,
    },
    {
        id: 'toys',
        name: 'Toys & Game',
        tooltip:
            'Board games, puzzles, collectibles, outdoor toys, outdoor games, video games, etc.',
        icon: <ToysIcon />,
    },
];
