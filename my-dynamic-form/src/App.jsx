import React from 'react';
import DynamicForm from './components/ui/dynamicForm';

function App() {
  const formConfig = [
    {
      name: "carrierCode",
      label: "Carrier Code",
      type: "text",
      value: "090655372"
    },
    {
      name: "carrierName",
      label: "Carrier Name",
      type: "text",
      value: "Sun Life Financial"
    },
    {
      name: "planName",
      label: "Plan Name",
      type: "text",
      value: "Sun Term"
    },
    {
      name: "productCode",
      label: "Product Code",
      type: "text",
      value: "3FD46E3B-0839-4906-BC46-064E697A18BC"
    },
    {
      name: "shortName",
      label: "Short Name",
      type: "text",
      value: "SL_TERM_SUNTERM"
    },
    {
      name: "policyProductTypeCode",
      label: "Policy Product Type",
      type: "options",
      value: "2",
      options: [
        { value: "1", label: "Universal Life" },
        { value: "2", label: "Term Life" },
        { value: "3", label: "Whole Life" },
        { value: "4", label: "Variable Life" },
        { value: "5", label: "Variable Universal Life" },
        { value: "6", label: "Endowment" },
        { value: "7", label: "Long Term Care" },
        { value: "8", label: "Disability Income" },
        { value: "9", label: "Fixed Annuity" },
        { value: "10", label: "Variable Annuity" },
        { value: "11", label: "Equity Indexed Annuity" },
        { value: "12", label: "Final Expense" }
      ]
    },
    {
      name: "lineOfBusiness",
      label: "Line of Business",
      type: "options",
      value: "1",
      options: [
        { value: "1", label: "Life" },
        { value: "2", label: "Annuity" },
        { value: "3", label: "Health" },
        { value: "4", label: "Property & Casualty" },
        { value: "5", label: "Long Term Care" },
        { value: "6", label: "Disability Income" },
        { value: "7", label: "Critical Illness" }
      ]
    },
    {
      name: "participatingInd",
      label: "Participating Indicator",
      type: "options",
      value: "0",
      options: [
        { value: "0", label: "Non-Participating" },
        { value: "1", label: "Participating" }
      ]
    },
    {
      name: "qualifiedPlan",
      label: "Qualified Plan",
      type: "options",
      value: "1",
      options: [
        { value: "1", label: "None" },
        { value: "2", label: "401(k)" },
        { value: "3", label: "403(b)" },
        { value: "4", label: "IRA" },
        { value: "5", label: "Roth IRA" },
        { value: "6", label: "SEP IRA" },
        { value: "7", label: "Simple IRA" },
        { value: "8", label: "Pension Plan" },
        { value: "9", label: "Profit Sharing" },
        { value: "10", label: "Keogh" }
      ]
    },
    {
      name: "illustrationScope",
      label: "Illustration Scope",
      type: "options",
      value: "3",
      options: [
        { value: "1", label: "Basic" },
        { value: "2", label: "Supplemental" },
        { value: "3", label: "Both" },
        { value: "4", label: "In-Force" },
        { value: "5", label: "None" }
      ]
    },
    {
      name: "ageCalculationType",
      label: "Age Calculation Type",
      type: "options",
      value: "4",
      options: [
        { value: "1", label: "Age Last Birthday" },
        { value: "2", label: "Age Nearest Birthday" },
        { value: "3", label: "Age Next Birthday" },
        { value: "4", label: "Age Nearest by Month/Date" },
        { value: "5", label: "Actual Age" }
      ]
    },
    {
      name: "paymentMode",
      label: "Payment Mode",
      type: "options",
      value: "1",
      options: [
        { value: "1", label: "Annual" },
        { value: "2", label: "Semi-Annual" },
        { value: "3", label: "Quarterly" },
        { value: "4", label: "Monthly" },
        { value: "5", label: "Single Premium" },
        { value: "6", label: "Flexible Premium" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DynamicForm config={formConfig} />
    </div>
  );
}

export default App;