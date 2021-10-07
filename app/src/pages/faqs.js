import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'

const SectionTitle = styled.h2`
	font-family: Cera-Bold;
	text-decoration: underline;
	margin-top: 20px;
`

const Question = styled.strong`
	font-size: larger;
	font-weight: bold;
	margin-top: 15px;
	color: #3d3d3d;
`
export default function componentName() {
	return (
		<Layout>
			<div className='fdb-block'>
				<div>
					<div className='container'>
						<div className='text-left justify-content-left'>
							<h1 id='faqs'>FAQs</h1>
							<SectionTitle id='-what-is-chumz-'>
								WHAT IS CHUMZ
							</SectionTitle>

							<Question>What is Chumz?</Question>
							<p>
								Chumz is a mobile based saving application that
								provides the best user experience and guidance
								to help you achieve your financial goals.
							</p>

							<Question>Why should I use Chumz?</Question>
							<p>
								Chumz helps you to easily turn your intent to
								save into action. It allows you to save both as
								an individual and as a group to achieve both
								short and long term financial goals and
								objectives.
							</p>
							<p>
								Chumz makes saving fun and engaging through
								gamification. It has an intelligent alert model
								that encourages saving from mobile money
								enabling you to save from as low as Kes 5.
							</p>

							<Question>How do I get started?</Question>
							<p>
								Download chumz app from playstore using the link
								below{' '}
								<a href='https://bit.ly/ChumzApp'>
									https://bit.ly/ChumzApp
								</a>
							</p>
							<p>Create an account and start saving</p>

							<Question>How much can I save?</Question>
							<p>
								You can save from as low as Kes 5. There is no
								maximum limit..
							</p>
							<SectionTitle id='safety-and-security'>
								SAFETY AND SECURITY
							</SectionTitle>

							<Question>
								How secure is my personal information?
							</Question>
							<p>
								Information collected is a KYC (Know your
								customer) ) requirement by Capital Markets
								Authority (CMA) the state regulator.
							</p>
							<p>
								Your personal information is encrypted using
								bank-level encryption both in transit and in
								storage.
							</p>
							<p>
								Your personal information is not shared with any
								third parties. (any exceptions? Such as incase
								of need to comply with a court order.)
							</p>

							<Question>Does Chumz have an office?</Question>
							<p>
								Yes, our offices are located on the 3rd floor of
								Police Sacco Plaza, Ngara road, Nairobi.
							</p>

							<Question>How secure is my money?</Question>
							<p>
								Chumz is regulated by the Capital Markets
								Authority,{' '}
								<a href='https://www.cma.or.ke/index.php?option=com_content&amp;view=article&amp;id=710:press-release-cma-welcomes-two-new-firms-to-the-regulatory-sandbox&amp;catid=12&amp;Itemid=207'>
									Press Release: CMA welcomes two new firms to
									the Regulatory Sandbox
								</a>
							</p>
							<p>
								Chumz is in partnership with Stanbic Bank as the
								funds’ custodian and NABO Capital Ltd as the
								fund manager.
							</p>
							<p>
								Chumz enforces bank level security on the App.
							</p>
							<SectionTitle id='chumz-saving-plans'>
								CHUMZ SAVING PLANS
							</SectionTitle>

							<Question>
								What is Quick Save and how does it work?
							</Question>
							<p>
								Quick save is a savings account that enables you
								to make immediate savings that you are yet to
								assign to a goal/savings plan.. you are yet to
								assign a goal/savings plan.You can’t withdraw
								funds from Quick save, however, you can transfer
								funds in QuickQuick save to an existing goal
								/savings plan and thereafter withdraw the
								funds.to an existing goal/ savings plan.
							</p>

							<Question>
								What savings plans are available on Chumz?
							</Question>
							<p>
								We have most of the savings plans preset, so you
								can easily select one when creating a goal.
								However if you have a plan goal that&#39;s not
								in the preset options available, you can create
								a custom goal.
							</p>
							<p>Some of already preset plans include :-</p>
							<ul>
								<li>52 weeks challenge</li>
								<li>Rent</li>
								<li>Insurance</li>
								<li>Education</li>
								<li>Business</li>
								<li>Emergency</li>
								<li>Clear debt</li>
								<li>Eat out</li>
								<li>Furniture</li>
								<li>House</li>
								<li>Kitchen Ware</li>
								<li>Electronics</li>
								<li>Life event</li>
								<li>Movies</li>
								<li>Shoes</li>
								<li>Shopping</li>
								<li>Land</li>
								<li>Tech Gadgets</li>
								<li>Travel</li>
								<li>Vacation</li>
							</ul>

							<Question>
								How many savings plans can I have?
							</Question>
							<p>
								There is no limit to the number of plans that
								you can create. Chumz seeks to empower you to
								achieve as much as possible.
							</p>

							<Question>
								What is normal savings vs fixed savings?
							</Question>
							<p>
								Once you identify a savings plan of choice, you
								proceed to create a financial goal towards that
								savings plan.
							</p>
							<p>
								The goal can be a normal goal i.e you save and
								also have the liberty to withdraw the money
								during the saving period.
							</p>
							<p>
								The goal can also be a fixed goal i.e you save
								and lock your money for a given period, earning
								a higher interest rate.
							</p>

							<Question>Can I monitor my savings?</Question>
							<p>
								Chumz is designed with monitoring in mind. There
								is a progress bar on your savings goals of your
								saving against your target goal amount.
							</p>
							<p>
								You can also go to your profile and click on the
								“View Details” button to see all your saving
								history.
							</p>

							<Question>Does my money earn interest?</Question>
							<p>Money saved on the platform earns interest.</p>
							<p>
								Normal savings earn an interest of 6% annually.
							</p>
							<p>
								Locked savings earn an interest of 8% annually.
							</p>
							<SectionTitle id='chumz-group-saving'>
								CHUMZ GROUP SAVING
							</SectionTitle>

							<Question>What is Chumz group savings?</Question>
							<p>
								Chumz Groups is a saving feature designed and
								optimized for group savings.{' '}
							</p>
							<p>
								You simply create a group and invite other
								members and you start saving.{' '}
							</p>

							<Question>
								How many people can a group have?
							</Question>
							<p>
								A saving group can have a minimum of 2 members
								and a maximum of 100 members.
							</p>

							<Question>How many groups can I create?</Question>
							<p>
								There is no limit to the number of groups you
								can create. <em>**</em>
							</p>

							<Question>
								How many goals can I have per group?
							</Question>
							<p>
								There is no limit to the number of goals per
								group. It is financially wise, however, to
								create few and realistic goals instead of
								creating many goals that optimise each goal you
								create. could be challenging to track and focus
								on.{' '}
							</p>

							<Question>How do group withdrawals work?</Question>
							<p>
								The person who creates a group is by default the
								group admin.
							</p>
							<p>Group admin initiates a withdrawal request.</p>
							<p>
								Each group member receives the withdrawal
								request and approves or rejects the withdrawal.
								Once everyone approves, the withdrawal button
								appears on the group admin’s end for withdrawal.
							</p>

							<Question>What is a group chat feature?</Question>
							<p>
								Group chat is a feature that enables group
								members to easily communicate with each other
								through chat messaging.
							</p>
							<SectionTitle id='withdrawals'>
								WITHDRAWALS
							</SectionTitle>

							<Question>When can I withdraw my funds?</Question>
							<p>
								You can withdraw money from your goals at any
								time.
							</p>

							<Question>How do I withdraw?</Question>
							<p>
								Tap on a goal.Click on view more details
								iconClick on the withdraw icon.
							</p>
							<p>
								Withdraw a partial or the full amount of that
								goal.
							</p>
							<p>
								You will get the funds in your M-pesa within 48
								hours, excluding weekends and public holidays.
							</p>

							<Question>
								Can I withdraw from the quick save?
							</Question>
							<p>To withdraw money from quick save:</p>
							<ul>
								<li>Create a personal goal</li>
								<li>
									Transfer the money from quick save to the
									personal goal
								</li>
								<li>Withdraw from the goal.</li>
							</ul>

							<Question>
								How long does it take to get money after
								withdrawal?
							</Question>
							<p>
								Once we get your withdrawal request, you will
								get the funds within 48 hours , excluding
								weekends and public holidays.
							</p>

							<Question>
								Why does it take 48hours to get withdrawals?
							</Question>
							<p>
								We offer interest, thus need to invest the
								funds, 48hrs allows us to uplift funds from
								investments and complete the withdrawal.
							</p>
							<SectionTitle id='fees'>FEES</SectionTitle>

							<Question>How much does it cost?</Question>
							<p>Chumz is free to use.</p>
							<p>
								No monthly charge, no maintenance cost, no other
								charges.
							</p>
							<SectionTitle id='team'>TEAM</SectionTitle>

							<Question>Who is behind chumz?</Question>
							<p>
								Our team is made up of people from diverse
								professional and academic fields.
							</p>
							<p>
								From computer science, finance, actuarial
								science and partners who have business reach in
								several African countries.
							</p>
							<p>Read more here</p>
							<p>
								<a href='https://chumz.io/#/about'>
									https://chumz.io/#/about
								</a>
							</p>
							<SectionTitle id='more-questions'>
								MORE QUESTIONS
							</SectionTitle>
							<p>
								If you have more question email us{' '}
								<a href='mailto:info@moneto.co.ke'>
									info@moneto.co.ke
								</a>{' '}
							</p>
							<p>
								Or call{' '}
								<a href='tel:0717 132 114'>0717 132 114</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
