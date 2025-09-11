<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeamsController extends Controller
{
    public function index()
    {
      $teamMembers = [
        [
            'id' => 1,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 2,
            'clickable' => false,
            'image' => '/images/team/team-g.png',
            'name' => 'Team Member G',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 3,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 4,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 5,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 6,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 7,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 8,
            'clickable' => false,
            'image' => '/images/team/team-f.png',
            'name' => 'Team Member F',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 9,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 10,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 11,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 12,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 13,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 14,
            'clickable' => false,
            'image' => '/images/team/team-d.png',
            'name' => 'Team Member D',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 15,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 1,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 2,
            'clickable' => false,
            'image' => '/images/team/team-g.png',
            'name' => 'Team Member G',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 3,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 4,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 5,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 6,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 7,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 8,
            'clickable' => false,
            'image' => '/images/team/team-f.png',
            'name' => 'Team Member F',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 9,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 10,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 11,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 12,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 13,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 14,
            'clickable' => false,
            'image' => '/images/team/team-d.png',
            'name' => 'Team Member D',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 15,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 1,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 2,
            'clickable' => false,
            'image' => '/images/team/team-g.png',
            'name' => 'Team Member G',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 3,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 4,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 5,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 6,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 7,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 8,
            'clickable' => false,
            'image' => '/images/team/team-f.png',
            'name' => 'Team Member F',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 9,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 10,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 11,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 12,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 13,
            'clickable' => true,
            'image' => '/images/team/team-member-1.png',
            'name' => 'Team Member 1',
            'selected' => '/images/team/selected/team-member-1s.png',
            'hover' => '/images/team/hover/team-member-1h.png',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 14,
            'clickable' => false,
            'image' => '/images/team/team-d.png',
            'name' => 'Team Member D',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ],
        [
            'id' => 15,
            'clickable' => true,
            'image' => '/images/team/team-member-2.png',
            'name' => 'Team Member 2',
            'selected' => 'https://placehold.co/200x250',
            'title' => 'Job Title',
            'description' => "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        ]                
    ];

        return response()->json($teamMembers);
    }
}