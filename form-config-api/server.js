const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Original formConfig endpoint
const productInfoData = [
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

// New coverage configuration
const coverageData= {
  name: "coverageProduct",
  label: "Coverage Product",
  fields: [
    {
      name: "planName",
      label: "Plan Name",
      type: "text",
      value: "Base Coverage"
    },
    {
      name: "productCode",
      label: "Product Code",
      type: "text",
      value: "04"
    },
    {
      name: "shortName",
      label: "Short Name",
      type: "text",
      value: "SL_TERM_T10BASE_PREM"
    },
    {
      name: "issueGender",
      label: "Issue Gender",
      type: "options",
      value: "1",
      options: [
        { value: "1", label: "Male" },
        { value: "2", label: "Female" },
        { value: "3", label: "Unisex" },
        { value: "4", label: "Gender Neutral" }
      ]
    },
    {
      name: "covScope",
      label: "Coverage Scope",
      type: "options",
      value: "1",
      options: [
        { value: "1", label: "New Business" },
        { value: "2", label: "Conversion" },
        { value: "3", label: "Replacement" },
        { value: "4", label: "Reinstatement" },
        { value: "5", label: "Renewal" },
        { value: "6", label: "Rewrite" }
      ]
    },
    {
      name: "livesType",
      label: "Lives Type",
      type: "options",
      value: "9",
      options: [
        { value: "1", label: "Single Life" },
        { value: "2", label: "Joint First to Die" },
        { value: "3", label: "Joint Last to Die" },
        { value: "4", label: "Multiple Lives" },
        { value: "5", label: "Primary" },
        { value: "6", label: "Secondary" },
        { value: "7", label: "Third" },
        { value: "8", label: "Other" },
        { value: "9", label: "Both" }
      ]
    },
    {
      name: "maturityAge",
      label: "Maturity Age",
      type: "text",
      value: "85"
    },
    {
      name: "maturityAgeUse",
      label: "Maturity Age Use",
      type: "options",
      value: "3",
      options: [
        { value: "1", label: "Policy Anniversary End" },
        { value: "2", label: "Policy Anniversary Beginning" },
        { value: "3", label: "Coverage Anniversary End" },
        { value: "4", label: "Coverage Anniversary Beginning" },
        { value: "5", label: "Calendar Year End" },
        { value: "6", label: "Calendar Year Beginning" }
      ]
    },
    {
      name: "lifeCovTypeCode",
      label: "Life Coverage Type",
      type: "options",
      value: "6",
      options: [
        { value: "1", label: "Whole Life" },
        { value: "2", label: "Universal Life" },
        { value: "3", label: "Variable Life" },
        { value: "4", label: "Term Decreasing Death Benefit" },
        { value: "5", label: "Term Return of Premium" },
        { value: "6", label: "Term Level Death Benefit" },
        { value: "7", label: "Term Increasing Death Benefit" },
        { value: "8", label: "Variable Universal Life" },
        { value: "9", label: "Indexed Universal Life" },
        { value: "10", label: "Final Expense" }
      ]
    },
    {
      name: "initialPremRenewYrs",
      label: "Initial Premium Renewal Years",
      type: "text",
      value: "10"
    },
    {
      name: "guarInitRenewYrs",
      label: "Guaranteed Initial Renewal Years",
      type: "text",
      value: "10"
    }
  ]
};

// Existing endpoint
app.get('/api/product-info', (req, res) => {
  res.json(productInfoData);
});

// New endpoint for coverage configuration
app.get('/api/coverage', (req, res) => {
  res.json(coverageData);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});