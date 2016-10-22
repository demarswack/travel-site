import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

