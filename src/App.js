import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export default function AivoryLandingPage() {
  const theme = useTheme();

  return (
    <Box fontFamily="sans-serif">
      {/* Header */}
      <Box
        component="header"
        position="sticky"
        top={0}
        bgcolor="white"
        boxShadow={1}
        zIndex={50}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={6}
        py={2}
      >
        <Typography variant="h6" fontWeight="bold" color="gray.800">
          AIvory
        </Typography>
        <Box
          component="nav"
          display={{ xs: "none", md: "flex" }}
          gap={3}
          color="gray.600"
        >
          {[
            ["How It Works", "#how"],
            ["Benefits", "#why"],
            ["Cost Savings", "#savings"],
            ["Pricing", "#pricing"],
            ["FAQ", "#faq"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "black",
            "&:hover": { backgroundColor: "#333" },
            textTransform: "capitalize",
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* Hero Section */}
      <Box textAlign="center" py={10} bgcolor="#f9fafb">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color="textPrimary"
        >
          Revolutionize Your Jewellery Visuals with AI
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          Ditch expensive traditional photoshoots. Get hyper-realistic
          AI-generated images of your jewellery that look studio-shot — for a
          fraction of the cost.
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 3,
              py: 1.5,
              fontWeight: 500,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#333" },
              textTransform: "capitalize",
            }}
          >
            Try AIvory Now
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              backgroundColor: "#fff",
              px: 3,
              py: 1.5,
              fontWeight: 500,
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "#333" },
              borderColor: "#000",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            See Example Gallery
          </Button>
        </Box>
      </Box>

      {/* How It Works */}
      <Box id="how" py={10} textAlign="center" bgcolor="white">
        <Typography variant="h5" fontWeight="600" mb={6}>
          How AIvory Works
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
          gap={4}
          px={{ xs: 3, md: 10 }}
        >
          {[
            [
              "1. Upload Product Photos",
              "Send us clean images — even smartphone clicks work.",
            ],
            [
              "2. Select Visual Style",
              "Choose models, environments, or concepts.",
            ],
            [
              "3. Receive Stunning Visuals",
              "Get high-res AI-generated images in 24–72 hrs.",
            ],
          ].map(([title, desc], i) => (
            <Card key={i} sx={{ p: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {title}
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Benefits */}
      <Box id="why" py={10} textAlign="center" bgcolor="#f9fafb">
        <Typography variant="h5" fontWeight="600" mb={6}>
          Why Jewellery Brands Love AIvory
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
          px={{ xs: 3, md: 10 }}
        >
          {[
            "Cut traditional shoot costs by over 70%",
            "Get campaign-ready visuals in 24–72 hours",
            "Style, model, and background customization",
            "No logistics or studio hassles",
            "Scale up easily for social and marketplace needs",
            "Choose diverse model appearances",
          ].map((point, i) => (
            <Card key={i} sx={{ p: 3 }}>
              <CardContent>
                <Typography fontWeight={500} color="textSecondary">
                  {point}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Cost Savings */}
      <Box id="savings" py={10} textAlign="center" bgcolor="white">
        <Typography variant="h5" fontWeight="600" mb={6}>
          Save Thousands Per Shoot
        </Typography>
        <Box maxWidth="md" mx="auto" px={3}>
          <Typography paragraph color="textSecondary">
            A single traditional jewellery shoot can cost ₹50,000–₹2,00,000+
            when you add up model fees, studio rentals, lighting,
            post-production, logistics, and more. With AIvory, you get equally
            stunning visuals at a fraction of the price — with no compromises on
            quality.
          </Typography>
          <Typography paragraph color="textSecondary">
            Brands working with us typically save 70–85% of their visual content
            budgets while gaining the flexibility to create fresh campaigns on
            demand.
          </Typography>
          <Typography color="textSecondary">
            No more reshoots, no more rigid planning. Just send in your product
            and styling preferences — and get visuals that sell.
          </Typography>
        </Box>
      </Box>

      {/* Pricing */}
      <Box id="pricing" py={10} textAlign="center">
        <Typography variant="h5" fontWeight="600" mb={6}>
          Simple, Scalable Pricing
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
          gap={4}
          px={{ xs: 3, md: 10 }}
        >
          {[
            ["Starter", "1–3 Products", "10 images", "$99"],
            ["Growth", "4–10 Products", "40 images", "$299"],
            ["Pro", "Custom Campaigns", "Tailored", "Contact Us"],
          ].map(([name, ideal, deliverables, price], i) => (
            <Card key={i} sx={{ p: 3 }}>
              <CardContent>
                <Typography fontWeight="bold" fontSize="1.25rem" gutterBottom>
                  {name}
                </Typography>
                <Typography color="textSecondary">{ideal}</Typography>
                <Typography color="textSecondary">{deliverables}</Typography>
                <Typography
                  color="textPrimary"
                  fontWeight={600}
                  fontSize="1.125rem"
                >
                  {price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 4,
            backgroundColor: "black",
            "&:hover": { backgroundColor: "#333" },
            textTransform: "capitalize",
          }}
        >
          Request a Custom Quote
        </Button>
      </Box>

      {/* FAQ */}
      <Box id="faq" py={10} textAlign="center" bgcolor="#f9fafb">
        <Typography variant="h5" fontWeight="600" mb={6}>
          FAQs
        </Typography>
        <Box
          maxWidth="lg"
          mx="auto"
          px={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {[
            [
              "Do I need professional product photos?",
              "No. Clear, well-lit phone photos are often good enough.",
            ],
            [
              "Can I choose model looks?",
              "Yes — by age, ethnicity, gender, and more.",
            ],
            [
              "How long does delivery take?",
              "Standard turnaround is 2–3 days.",
            ],
            [
              "Are the images ad-ready?",
              "Yes, we deliver optimized files for web, ads, and social.",
            ],
            [
              "Do you only do jewellery?",
              "Yes, we currently work only with jewellery brands.",
            ],
          ].map(([q, a], i) => (
            <Box key={i} mb={3}>
              <Typography fontWeight={500}>{q}</Typography>
              <Typography color="textSecondary">{a}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Contact */}
      <Box id="contact" py={10} textAlign="center">
        <Typography variant="h5" fontWeight="600" mb={4}>
          Let’s Talk
        </Typography>
        <Box
          maxWidth="sm"
          mx="auto"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField placeholder="Name" fullWidth />
          <TextField placeholder="Email" fullWidth />
          <TextField placeholder="Brand Name" fullWidth />
          <TextField
            placeholder="Tell us what you need..."
            multiline
            rows={4}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#333" },
              textTransform: "capitalize",
            }}
          >
            Submit
          </Button>
        </Box>
        <Typography mt={4} color="textSecondary">
          Or email us directly at{" "}
          <Box component="span" fontWeight="500" color="textPrimary">
            hello@aivory.ai
          </Box>
        </Typography>
      </Box>

      {/* Footer */}
      <Box
        bgcolor="#f3f4f6"
        py={4}
        textAlign="center"
        fontSize="0.875rem"
        color="textSecondary"
      >
        <Box mb={1}>
          <a href="#" style={{ marginRight: 8 }}>
            Terms
          </a>
          <a href="#">Privacy</a>
        </Box>
        <Typography>
          © {new Date().getFullYear()} AIvory. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
