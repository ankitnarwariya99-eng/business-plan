import React, { forwardRef } from 'react';
import { BusinessPlanSection, BusinessPlanTheme } from '../types/businessPlan';
import { 
  Building2, 
  Users, 
  Target, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Shield, 
  Heart, 
  Gift,
  Mail,
  Linkedin,
  User,
  Award,
  Briefcase
} from 'lucide-react';

interface BusinessPlanPageProps {
  section: BusinessPlanSection;
  theme: BusinessPlanTheme;
  pageNumber: number;
  totalPages: number;
}

export const BusinessPlanPage = forwardRef<HTMLDivElement, BusinessPlanPageProps>(
  ({ section, theme, pageNumber, totalPages }, ref) => {
    const renderPageContent = () => {
      switch (section.id) {
        case 'cover-page':
          return renderCoverPage();
        case 'table-of-contents':
          return renderTableOfContents();
        case 'company-description':
          return renderCompanyDescription();
        case 'market-analysis':
          return renderMarketAnalysis();
        case 'organization-management':
          return renderOrganizationManagement();
        case 'service-product-line':
          return renderProductService();
        case 'marketing-sales':
          return renderMarketingSales();
        case 'financial-projections':
          return renderFinancialProjections();
        case 'funding-request':
          return renderFundingRequest();
        case 'appendix':
          return renderAppendix();
        case 'appendix-government-policy':
          return renderGovernmentPolicy();
        case 'appendix-ngo-landscape':
          return renderNGOLandscape();
        case 'appendix-grants':
          return renderGrants();
        default:
          return <div>Page content not found</div>;
      }
    };

    const renderCoverPage = () => (
      <div className="h-full flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mb-8">
          <Building2 size={64} className="text-blue-600 mx-auto mb-4" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4 cover-title">
          {section.content?.companyName || 'Your Company Name'}
        </h1>
        
        <h2 className="text-2xl text-gray-600 mb-8">
          {section.content?.subtitle || 'Business Plan'}
        </h2>
        
        <div className="text-lg text-gray-700 space-y-2">
          <p><strong>Year:</strong> {section.content?.year || new Date().getFullYear()}</p>
          <p><strong>Prepared by:</strong> {section.content?.preparedBy || 'Business Team'}</p>
        </div>

        {section.content?.statsCards && section.content.statsCards.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
            {section.content.statsCards.map((card: any, index: number) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">{card.value}</div>
                <div className="text-sm text-gray-600">{card.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );

    const renderTableOfContents = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <FileText size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Table of Contents</h1>
          <p className="text-gray-600 mt-2">Navigate Your Business Journey</p>
        </div>

        <div className="table-of-contents space-y-4">
          <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center space-x-3">
              <Building2 size={20} className="text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Company Description</div>
                <div className="text-sm text-gray-600">Foundation & Vision</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center space-x-3">
              <Target size={20} className="text-purple-600" />
              <div>
                <div className="font-semibold text-gray-900">Market Analysis</div>
                <div className="text-sm text-gray-600">Market Opportunity & Competitive Landscape</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center space-x-3">
              <Users size={20} className="text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Organization and Management</div>
                <div className="text-sm text-gray-600">Leadership Team & Organizational Structure</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
            <div className="flex items-center space-x-3">
              <Briefcase size={20} className="text-indigo-600" />
              <div>
                <div className="font-semibold text-gray-900">Service or Product Line</div>
                <div className="text-sm text-gray-600">Innovation Meets Excellence</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">6</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
            <div className="flex items-center space-x-3">
              <TrendingUp size={20} className="text-pink-600" />
              <div>
                <div className="font-semibold text-gray-900">Marketing & Sales Strategy</div>
                <div className="text-sm text-gray-600">Customer Acquisition & Growth Strategy</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-pink-600">7</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-center space-x-3">
              <DollarSign size={20} className="text-yellow-600" />
              <div>
                <div className="font-semibold text-gray-900">Financial Projections</div>
                <div className="text-sm text-gray-600">5-Year Financial Roadmap</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
            <div className="flex items-center space-x-3">
              <DollarSign size={20} className="text-red-600" />
              <div>
                <div className="font-semibold text-gray-900">Funding Request</div>
                <div className="text-sm text-gray-600">Investment Opportunity & Capital Requirements</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">9</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-gray-500">
            <div className="flex items-center space-x-3">
              <FileText size={20} className="text-gray-600" />
              <div>
                <div className="font-semibold text-gray-900">Appendix</div>
                <div className="text-sm text-gray-600">Supporting Documents & Additional Information</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-600">10</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center space-x-3">
              <Shield size={20} className="text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Government Policy</div>
                <div className="text-sm text-gray-600">Regulatory Environment & Compliance</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">11</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center space-x-3">
              <Heart size={20} className="text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">NGO Landscape</div>
                <div className="text-sm text-gray-600">Partnership Opportunities & Resources</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center space-x-3">
              <Gift size={20} className="text-purple-600" />
              <div>
                <div className="font-semibold text-gray-900">Grants & Funding</div>
                <div className="text-sm text-gray-600">Available Grants & Application Strategy</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">13</div>
              <div className="text-xs text-gray-500">PAGE</div>
            </div>
          </div>
        </div>
      </div>
    );

    const renderCompanyDescription = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <Building2 size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Company Description</h1>
          <p className="text-gray-600 mt-2">Foundation & Vision</p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Structure</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.legalStructure || 'Our company operates as a [legal structure] established to provide innovative solutions in our target market. We maintain full compliance with all regulatory requirements and industry standards.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Company History</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.companyHistory || 'Founded with a vision to transform the industry, our company has grown from a startup concept to a market-ready organization. Our journey reflects our commitment to innovation and excellence.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Focus</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.industry || 'We operate in a dynamic industry with significant growth potential. Our focus on emerging trends and customer needs positions us for sustainable success.'}
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Vision Statement</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.visionStatement || 'To become the leading provider of innovative solutions that transform how businesses operate and deliver value to their customers.'}
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Unique Value Proposition</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.uniqueValueProposition || 'Our unique combination of expertise, technology, and customer focus creates unmatched value for our clients and stakeholders.'}
            </p>
          </div>
        </div>

        {section.content?.statsCards && section.content.statsCards.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4">
            {section.content.statsCards.map((card: any, index: number) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center border">
                <div className="text-2xl font-bold text-blue-600">{card.value}</div>
                <div className="text-sm text-gray-600">{card.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );

    const renderMarketAnalysis = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <Target size={48} className="text-purple-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Market Analysis</h1>
          <p className="text-gray-600 mt-2">Market Opportunity & Competitive Landscape</p>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Analysis</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.industryAnalysis || 'The industry shows strong growth potential with emerging opportunities driven by technological advancement and changing consumer preferences.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Market</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.targetMarket || 'Our target market consists of forward-thinking businesses and consumers who value innovation and quality solutions.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Size</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.marketSize || 'The addressable market represents a significant opportunity with projected growth rates exceeding industry averages.'}
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Competitive Analysis</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.competitorAnalysis || 'Our competitive landscape analysis reveals opportunities for differentiation and market positioning.'}
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Competitive Advantage</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.competitiveAdvantage || 'Our competitive advantages include proprietary technology, experienced team, and strong customer relationships.'}
            </p>
          </div>
        </div>

        {section.content?.marketSegments && section.content.marketSegments.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Segments</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.content.marketSegments.map((segment: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
                  <div className="text-lg font-bold" style={{ color: segment.color }}>{segment.name}</div>
                  <div className="text-2xl font-bold text-gray-900">{segment.value}</div>
                  <div className="text-sm text-gray-600">{segment.percentage}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    const renderOrganizationManagement = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <Users size={48} className="text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Organization and Management</h1>
          <p className="text-gray-600 mt-2">Leadership Team & Organizational Structure</p>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Stakeholder Information</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.stakeholderInfo || 'Our stakeholder ecosystem includes investors, advisors, customers, and strategic partners who contribute to our success.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Leadership Team</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.leadershipTeam || 'Our leadership team combines decades of industry experience with fresh perspectives and innovative thinking.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Organizational Structure</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.organizationalStructure || 'Our flat organizational structure promotes collaboration, quick decision-making, and efficient communication.'}
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Advisory Board</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.advisoryBoard || 'Our advisory board provides strategic guidance and industry expertise to support our growth objectives.'}
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Personnel</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.keyPersonnel || 'Our key personnel bring specialized skills and experience essential for executing our business strategy.'}
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        {section.content?.teamMembers && section.content.teamMembers.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
            <div className="grid grid-cols-1 gap-4">
              {section.content.teamMembers.map((member: any, index: number) => (
                <div key={member.id || index} className="bg-white p-6 rounded-lg shadow-md border flex items-start space-x-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    {member.imageUrl ? (
                      <img 
                        src={member.imageUrl} 
                        alt={`${member.firstName} ${member.lastName}`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                        onError={(e) => {
                          // Fallback to default avatar if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl ${member.imageUrl ? 'hidden' : ''}`}>
                      {member.firstName?.charAt(0)}{member.lastName?.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Member Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {member.firstName} {member.lastName}
                        </h4>
                        <p className="text-blue-600 font-semibold">{member.title}</p>
                        <p className="text-sm text-gray-600 mb-2">{member.qualification}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{member.ownershipPercentage}%</div>
                        <div className="text-xs text-gray-500">OWNERSHIP</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {member.bio || 'Experienced professional contributing to our team\'s success.'}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Briefcase size={14} />
                        <span className="capitalize">{member.role}</span>
                      </div>
                      
                      {member.email && (
                        <div className="flex items-center space-x-1 text-blue-600">
                          <Mail size={14} />
                          <span className="truncate max-w-32">{member.email}</span>
                        </div>
                      )}
                      
                      {member.linkedin && (
                        <div className="flex items-center space-x-1 text-blue-700">
                          <Linkedin size={14} />
                          <span>LinkedIn</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legacy Stakeholders Section for backward compatibility */}
        {section.content?.stakeholders && section.content.stakeholders.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stakeholders</h3>
            <div className="grid grid-cols-1 gap-4">
              {section.content.stakeholders.map((stakeholder: any, index: number) => (
                <div key={stakeholder.id || index} className="bg-white p-4 rounded-lg shadow-md border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{stakeholder.name}</h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{stakeholder.role}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{stakeholder.experience}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Stake: {stakeholder.stake}</span>
                    <div className="flex space-x-2">
                      {stakeholder.email && <Mail size={14} />}
                      {stakeholder.linkedin && <Linkedin size={14} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    const renderProductService = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <Briefcase size={48} className="text-indigo-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Service or Product Line</h1>
          <p className="text-gray-600 mt-2">Innovation Meets Excellence</p>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.productDescription || 'Our innovative products and services are designed to meet the evolving needs of our target market with superior quality and value.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits to Customers</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.benefitsToCustomers || 'Our solutions provide measurable benefits including cost savings, improved efficiency, and enhanced user experience.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Development Stage</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.developmentStage || 'Our products are in advanced development stages with proven market validation and customer feedback integration.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.intellectualProperty || 'We maintain a strong intellectual property portfolio including patents, trademarks, and proprietary technologies.'}
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Future Products</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.futureProducts || 'Our product roadmap includes exciting innovations that will expand our market reach and customer value proposition.'}
            </p>
          </div>
        </div>

        {section.content?.productFeatures && section.content.productFeatures.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.content.productFeatures.map((feature: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
                  <div className="text-lg font-bold text-gray-900">{feature.name}</div>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <div className="text-lg font-bold" style={{ color: feature.color }}>{feature.percentage}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    const renderMarketingSales = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <TrendingUp size={48} className="text-pink-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Marketing & Sales Strategy</h1>
          <p className="text-gray-600 mt-2">Customer Acquisition & Growth Strategy</p>
        </div>

        <div className="space-y-6">
          <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.marketingStrategy || 'Our comprehensive marketing strategy leverages digital channels, content marketing, and strategic partnerships to reach our target audience.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sales Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.salesStrategy || 'Our sales approach combines direct sales, channel partnerships, and digital platforms to maximize market penetration and customer acquisition.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.pricingStrategy || 'Our competitive pricing strategy balances value delivery with market positioning to ensure sustainable profitability and customer satisfaction.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Distribution Channels</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.distributionChannels || 'We utilize multiple distribution channels including direct sales, online platforms, and strategic partnerships to reach customers effectively.'}
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Promotion Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.promotionStrategy || 'Our promotional activities include digital marketing, industry events, thought leadership, and customer referral programs.'}
            </p>
          </div>
        </div>

        {section.content?.marketingChannels && section.content.marketingChannels.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketing Channels</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.content.marketingChannels.map((channel: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
                  <div className="text-lg font-bold text-gray-900">{channel.name}</div>
                  <div className="text-2xl font-bold" style={{ color: channel.color }}>{channel.percentage}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    const renderFinancialProjections = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <DollarSign size={48} className="text-yellow-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Financial Projections</h1>
          <p className="text-gray-600 mt-2">5-Year Financial Roadmap</p>
        </div>

        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Startup Costs</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.startupCosts || 'Initial investment requirements include technology development, market entry, team building, and operational setup costs.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sales Forecast</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.salesForecast || 'Our sales projections show steady growth based on market analysis, customer acquisition strategies, and product development milestones.'}
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expense Projections</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.expenseProjections || 'Operating expenses include personnel, technology, marketing, and administrative costs with careful attention to scalability and efficiency.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Break-Even Analysis</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.breakEvenAnalysis || 'Break-even analysis indicates the point at which revenues will cover all fixed and variable costs, projected within the first 18-24 months.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Funding Needs</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.fundingNeeds || 'Total funding requirements are calculated to support operations through profitability with appropriate reserves for growth opportunities.'}
            </p>
          </div>
        </div>

        {section.content?.financialMetrics && section.content.financialMetrics.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Financial Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.content.financialMetrics.map((metric: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
                  <div className="text-lg font-bold text-gray-900">{metric.label}</div>
                  <div className="text-2xl font-bold" style={{ color: metric.color }}>{metric.value}</div>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    const renderFundingRequest = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <DollarSign size={48} className="text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Funding Request</h1>
          <p className="text-gray-600 mt-2">Investment Opportunity & Capital Requirements</p>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Funding Needs</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.currentFundingNeeds || 'We are seeking initial funding to accelerate product development, market entry, and team expansion to capture market opportunities.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Future Funding Needs</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.futureFundingNeeds || 'Future funding rounds will support scaling operations, international expansion, and additional product development initiatives.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Use of Funds</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.useOfFunds || 'Investment funds will be allocated across product development, marketing, team expansion, and operational infrastructure to ensure sustainable growth.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategic Financial Situation</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.strategicFinancialSituation || 'Our financial strategy focuses on achieving profitability while maintaining growth momentum and building long-term shareholder value.'}
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Exit Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.exitStrategy || 'Potential exit strategies include strategic acquisition by industry leaders or public offering, providing attractive returns for investors.'}
            </p>
          </div>
        </div>

        {section.content?.fundingAllocation && section.content.fundingAllocation.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Allocation</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.content.fundingAllocation.map((allocation: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
                  <div className="text-lg font-bold text-gray-900">{allocation.category}</div>
                  <div className="text-2xl font-bold" style={{ color: allocation.color }}>{allocation.amount}</div>
                  <div className="text-sm text-gray-600">{allocation.percentage}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    const renderAppendix = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <FileText size={48} className="text-gray-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Appendix</h1>
          <p className="text-gray-600 mt-2">Supporting Documents & Additional Information</p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Resumes</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.resumes || 'Detailed resumes of key team members and advisors highlighting relevant experience and qualifications.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Permits & Licenses</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.permits || 'All necessary business permits, licenses, and regulatory approvals required for operations.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Documents</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.legalDocuments || 'Corporate formation documents, partnership agreements, and intellectual property filings.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Research</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.marketResearch || 'Comprehensive market research data, customer surveys, and competitive analysis reports.'}
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Information</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.additionalInfo || 'Supplementary materials including product specifications, technical documentation, and reference materials.'}
            </p>
          </div>
        </div>
      </div>
    );

    const renderGovernmentPolicy = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <Shield size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Government Policy</h1>
          <p className="text-gray-600 mt-2">Regulatory Environment & Compliance</p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Regulations</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.industryRegulations || 'Overview of key industry regulations that impact our business operations and strategic planning.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.complianceRequirements || 'Detailed compliance framework ensuring adherence to all applicable laws and regulations.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Licensing Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.licensingRequirements || 'Required licenses and permits for business operations with timeline for acquisition and renewal.'}
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy Changes</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.policyChanges || 'Analysis of recent and anticipated policy changes that may impact business operations and strategy.'}
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tax Incentives</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.taxIncentives || 'Available tax incentives and benefits that support business growth and investment in our sector.'}
            </p>
          </div>
        </div>
      </div>
    );

    const renderNGOLandscape = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <Heart size={48} className="text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">NGO Landscape</h1>
          <p className="text-gray-600 mt-2">Partnership Opportunities & Resources</p>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Relevant NGOs</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.relevantNGOs || 'Identification of NGOs and non-profit organizations aligned with our mission and values for potential collaboration.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Potential Partnerships</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.potentialPartnerships || 'Strategic partnership opportunities with NGOs that can enhance our social impact and market reach.'}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Resources Offered</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.resourcesOffered || 'Resources and support services available through NGO partnerships including funding, expertise, and network access.'}
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.contactInformation || 'Key contact information for relevant NGOs and partnership coordinators for future collaboration.'}
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Success Stories</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.successStories || 'Examples of successful business-NGO partnerships that demonstrate mutual benefit and social impact.'}
            </p>
          </div>
        </div>
      </div>
    );

    const renderGrants = () => (
      <div className="h-full p-8">
        <div className="text-center mb-8">
          <Gift size={48} className="text-purple-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 page-title">Grants & Funding</h1>
          <p className="text-gray-600 mt-2">Available Grants & Application Strategy</p>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Government Grants</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.governmentGrants || 'Available government grants and funding programs that align with our business objectives and eligibility criteria.'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">NGO Grants</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.ngoGrants || 'Grant opportunities from NGOs and foundations that support businesses with social impact and community benefit.'}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility Criteria</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.eligibilityCriteria || 'Detailed eligibility requirements for various grant programs and our qualification status for each opportunity.'}
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Process</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.applicationProcess || 'Step-by-step application process for grant programs including required documentation and submission procedures.'}
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Deadlines</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.applicationDeadlines || 'Important deadlines for grant applications and funding cycles to ensure timely submission and consideration.'}
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Grant Acquisition Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content?.grantAcquisitionStrategy || 'Strategic approach to grant acquisition including prioritization, application timeline, and success metrics.'}
            </p>
          </div>
        </div>

        {section.content?.fundingStats && section.content.fundingStats.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.content.fundingStats.map((stat: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border text-center">
                  <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div 
        ref={ref}
        className="w-full h-full bg-white border border-gray-200 shadow-lg overflow-hidden"
        style={{
          width: '140mm',
          height: '198mm',
          minWidth: '140mm',
          maxWidth: '140mm',
          minHeight: '198mm',
          maxHeight: '198mm'
        }}
      >
        {renderPageContent()}
        
        {/* Page Footer */}
        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
          Page {pageNumber} of {totalPages}
        </div>
      </div>
    );
  }
);

BusinessPlanPage.displayName = 'BusinessPlanPage';